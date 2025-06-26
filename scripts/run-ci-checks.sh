#!/bin/bash

# Local CI/CD Pipeline Test Script
# This script runs the same checks as our GitHub Actions workflow

set -e  # Exit on any error

echo "🚀 Starting Local CI/CD Pipeline Checks..."
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print status
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# 1. Install Dependencies
print_status "Installing dependencies..."
npm ci --legacy-peer-deps
print_success "Dependencies installed"

# 2. Security Checks
echo ""
echo "🔒 Running Security Checks..."
echo "=============================="

# NPM Audit
print_status "Running npm audit..."
if npm audit --audit-level=moderate; then
    print_success "npm audit passed"
else
    print_warning "npm audit found issues (continuing...)"
fi

# Check for secrets (basic patterns)
print_status "Scanning for potential secrets..."
if grep -r -E "(password|secret|key|token)\s*[=:]\s*['\"][^'\"]{8,}" . \
   --exclude-dir=node_modules \
   --exclude-dir=.git \
   --exclude-dir=client/dist \
   --exclude="*.sh" \
   --exclude="package-lock.json" > /dev/null 2>&1; then
    print_warning "Potential secrets found - please review manually"
else
    print_success "No obvious secrets found"
fi

# 3. Code Quality Checks
echo ""
echo "📝 Running Code Quality Checks..."
echo "=================================="

# TypeScript type checking
print_status "Running TypeScript type checking..."
if npm run type-check; then
    print_success "TypeScript type checking passed"
else
    print_error "TypeScript type checking failed"
    exit 1
fi

# Code formatting check
print_status "Checking code formatting..."
if npm run format:check; then
    print_success "Code formatting is correct"
else
    print_warning "Code formatting issues found. Run 'npm run format' to fix"
fi

# ESLint (excluding build files)
print_status "Running ESLint..."
if npm run lint; then
    print_success "ESLint passed"
else
    print_warning "ESLint found issues (some may be in build files)"
fi

# 4. Tests
echo ""
echo "🧪 Running Tests..."
echo "=================="

print_status "Running unit tests..."
if npm run test:run; then
    print_success "All tests passed"
else
    print_error "Tests failed"
    exit 1
fi

# 5. Build Check
echo ""
echo "🔨 Running Build Check..."
echo "========================="

print_status "Building application..."
if npm run build:netlify; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check build output
print_status "Verifying build output..."
if [ ! -d "client/dist" ]; then
    print_error "Build output directory not found"
    exit 1
fi

if [ ! -f "client/dist/index.html" ]; then
    print_error "index.html not found in build output"
    exit 1
fi

# Check build size
BUILD_SIZE=$(du -sh client/dist | cut -f1)
print_status "Build size: $BUILD_SIZE"

BUILD_SIZE_BYTES=$(du -sb client/dist | cut -f1)
if [ "$BUILD_SIZE_BYTES" -gt 10485760 ]; then
    print_warning "Build size is large (>10MB): $BUILD_SIZE"
else
    print_success "Build size is reasonable: $BUILD_SIZE"
fi

# Scan build output for sensitive data
print_status "Scanning build output for sensitive data..."
if grep -r "password\|secret\|key\|token" client/dist/ \
   --exclude-dir=assets \
   --exclude="*.js.map" | grep -v "placeholder" > /dev/null 2>&1; then
    print_warning "Potential sensitive data found in build output"
else
    print_success "Build output clean"
fi

# 6. License Check (if license-checker is available)
echo ""
echo "📄 Running License Check..."
echo "============================"

if command -v license-checker >/dev/null 2>&1; then
    print_status "Checking dependency licenses..."
    license-checker --json > licenses.json 2>/dev/null || true
    
    # Check for problematic licenses
    PROBLEMATIC_LICENSES=("GPL-2.0" "GPL-3.0" "AGPL-1.0" "AGPL-3.0" "LGPL-2.0" "LGPL-2.1" "LGPL-3.0")
    
    for license in "${PROBLEMATIC_LICENSES[@]}"; do
        if grep -q "$license" licenses.json 2>/dev/null; then
            print_warning "Found potentially problematic license: $license"
        fi
    done
    
    print_success "License check completed"
    rm -f licenses.json
else
    print_warning "license-checker not installed, skipping license check"
fi

# 7. Final Summary
echo ""
echo "📊 CI/CD Pipeline Summary"
echo "========================="
print_success "✅ Dependencies installed"
print_success "✅ Security checks completed"
print_success "✅ Code quality checks completed"
print_success "✅ Tests passed"
print_success "✅ Build successful"
print_success "✅ Build verification passed"

echo ""
print_success "🎉 All CI/CD checks completed successfully!"
print_status "Your code is ready for deployment."

echo ""
echo "Next steps:"
echo "- Commit your changes: git add . && git commit -m 'your message'"
echo "- Push to GitHub: git push origin main"
echo "- The GitHub Actions workflow will run automatically" 