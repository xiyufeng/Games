@echo off
echo "a0jpg.bat: v0.0. 51 "

setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "tokens=1,2* delims= "  %%a in ('dir /b ?.jpg') do (
	call set /a x = !x! + 1

	if !x! == 1 (
		rem 	echo !x! : "%%a %%b"
	) 
	echo 	%%a  0%%a
	ren 	%%a  0%%a
)
