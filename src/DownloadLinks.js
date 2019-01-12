import React from 'react';

export default function DownloadLinks(props){
    return (
        <>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest/releases/download/2.0.0/CPDT.exe" target="_blank"><img src="img/windows.svg"/><br/>Windows</a>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest/releases/download/2.0.0/CPDT.app.zip" target="_blank"><img src="img/macos.svg"/><br/>macOS</a>
            <a href="https://play.google.com/store/apps/details?id=com.Saplin.CPDT" target="_blank"><img src="img/google-play.svg"/><br/>Android</a>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest/releases/download/2.0.1/com.Saplin.CPDT.apk" target="_blank"><img src="img/apk.svg"/><br/>.APK</a>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest" target="_blank"><img src="img/github.svg"/><br/>GitHub</a>
        </>
    )
}