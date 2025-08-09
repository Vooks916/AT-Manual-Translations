<#
Sync translations from the sibling project "ArmoredTurtleWebsite" into this repo's `translations` folder.

Assumes both projects are siblings in the same parent directory, e.g.:
  <parent>/ArmoredTurtleWebsite
  <parent>/AT-Manual-Translations  (this repo)

Usage:
  powershell -NoProfile -ExecutionPolicy Bypass -File ./scripts/sync-translations.ps1
  powershell -NoProfile -ExecutionPolicy Bypass -File ./scripts/sync-translations.ps1 -Clean   # wipe destination before copying
#>

[CmdletBinding()]
param(
  [switch] $Clean,
  [string] $WebsitePath
)

$ErrorActionPreference = 'Stop'

function Resolve-Paths {
  $scriptDir = if ($PSScriptRoot) { $PSScriptRoot } else { Split-Path -Parent $MyInvocation.MyCommand.Path }
  if (-not $scriptDir) { throw 'Unable to resolve script directory.' }

  $repoRoot = Split-Path -Parent $scriptDir
  if (-not $repoRoot) { throw 'Unable to resolve repository root from script directory.' }

  $parentOfRepo = Split-Path -Parent $repoRoot
  if (-not $parentOfRepo) { throw 'Unable to resolve parent directory of repository root.' }

  $websiteRoot = if ($WebsitePath) { $WebsitePath } else { Join-Path $parentOfRepo 'ArmoredTurtleWebsite' }
  $srcPublic = Join-Path $websiteRoot 'public'
  $src = Join-Path $srcPublic 'translations'
  $dest = Join-Path $repoRoot 'translations'

  return [pscustomobject]@{
    ScriptDir = $scriptDir
    RepoRoot = $repoRoot
    WebsiteRoot = $websiteRoot
    Source = $src
    Destination = $dest
  }
}

function Ensure-DestinationExists([string] $path) {
  if (-not (Test-Path -LiteralPath $path)) {
    Write-Host "Creating destination folder: $path"
    New-Item -ItemType Directory -Path $path | Out-Null
  }
}

function Clean-Destination([string] $path) {
  if (Test-Path -LiteralPath $path) {
    Write-Host "Cleaning destination folder: $path"
    Get-ChildItem -LiteralPath $path -Force | Remove-Item -Recurse -Force
  }
}

function Copy-Translations([string] $src, [string] $dest) {
  Write-Host "Copying from`n  $src`ninto`n  $dest" -ForegroundColor Cyan
  Copy-Item -Path (Join-Path $src '*') -Destination $dest -Recurse -Force -ErrorAction Stop
}

$paths = Resolve-Paths

if (-not $paths.WebsiteRoot -or -not (Test-Path -LiteralPath $paths.WebsiteRoot)) {
  throw "Source project not found: $($paths.WebsiteRoot)"
}
if (-not $paths.Source -or -not (Test-Path -LiteralPath $paths.Source)) {
  throw "Source translations folder not found: $($paths.Source)"
}

Ensure-DestinationExists -path $paths.Destination

if ($Clean.IsPresent) {
  Clean-Destination -path $paths.Destination
}

Copy-Translations -src $paths.Source -dest $paths.Destination

Write-Host "Sync complete." -ForegroundColor Green



