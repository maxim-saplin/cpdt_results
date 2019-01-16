import React from 'react';
import windows from './img/windows.svg';
import macOS from './img/macos.svg';
import google_play from './img/google-play.svg';
import apk from './img/apk.svg';
import github from './img/github.svg';

export default function DownloadLinks(props){
    return (
        <>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest/releases/download/2.0.2/CPDT.exe" 
            target="_blank">
                <img src={windows}/>
                <br/>Windows
            </a>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest/releases/download/2.0.2/CPDT.app.zip" 
            target="_blank">
                <img src={macOS}/>
                <br/>macOS
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.Saplin.CPDT" 
            target="_blank">
                <img src={google_play}/><br/>
                Android
            </a>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest/releases/download/2.0.2/com.Saplin.CPDT.apk" 
            target="_blank">
                <img src={apk}/>
                <br/>.APK
            </a>
            <a href="https://github.com/maxim-saplin/CrossPlatformDiskTest" 
            target="_blank">
                <img src={github}/>
                <br/>GitHub
            </a>
        </>
    )
}