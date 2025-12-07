$ProgressPreference = 'SilentlyContinue'
$flutterUrl = "https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_3.24.5-stable.zip"
$zipPath = "$env:USERPROFILE\flutter_setup.zip"
$destPath = "$env:USERPROFILE"
$flutterBin = "$destPath\flutter\bin"

Write-Host "Downloading Flutter..."
Invoke-WebRequest -Uri $flutterUrl -OutFile $zipPath

Write-Host "Extracting Flutter..."
Expand-Archive -Path $zipPath -DestinationPath $destPath -Force

Write-Host "Cleaning up zip..."
Remove-Item $zipPath

Write-Host "Adding to PATH..."
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($currentPath -notlike "*$flutterBin*") {
    $newPath = "$currentPath;$flutterBin"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    Write-Host "Path updated."
} else {
    Write-Host "Path already set."
}

Write-Host "Done!"
