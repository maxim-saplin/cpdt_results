import React from 'react';
import PressableLink from './PressableLink';
import DownloadLinks from './DownloadLinks';

export default function About(props){
    return (
        <>
            {props.inApp && <br/>}
            <PressableLink className={props.linkClass} onClick={props.toggleAbout}>[B]ack to Chart</PressableLink>
            <br/>
            {!props.inApp &&
            <div class="downloadBox">
                <h1>Download CPDT Benchmark</h1>
                <br/>
                <DownloadLinks />    
            </div>}

            {!props.download &&
            <> 
            <h1>How are the Chart Results Obtained</h1>
            <br/>
            <div className="text">
                <p>
                <em>Cross Platform Disk Test (CPDT)</em> application is used to measure storage performance. 
                {!props.inApp && <> See download links above.</>}
                </p>
                <p>
                At least 3 test runs are done, 
                for each of the 5 perfromance metrics the best one is selected. I.e. the set of 5 metrics associated with a certain device 
                are the greatest of all the average thoughput values obtained through testing.
                </p>
                <p>
                The tests are executed with the following options: file size is 1GB, write buffering is off, 
                in-memory cache is off. For very fast devices (sequential speeds above 1GB/s)
                file size is increased to 2GB.
                </p>
                <p>
                To avoid intereferences and side effects all running apps are closed, network activity is disabled (e.g. updates, downloads).
                Since lack of free disk space affects performance (very noticable on mobile devices)
                testting is conducted at at least 70% of available space on the drive.
                </p>
                <p>
                In the test results you can find same device tested under different conditions
                (e.g. encryption on/off, different file systems, different free space etc.)
                which in such a case is noted under the device name.
                </p>
            </div>
            <br/>
            </>}
            <h1>How does the App Work</h1>
            <br/>
            <div className="text">
                <p>
                This application uses standard OS's file API (WinAPI on Windows, POSIX on Mac and NDK on Android) to measure the speed of data transfer (in Megabytes per Second) between storage device (HDD, SSD, USB flash drive) and system memory(RAM). API calls are done through .NET Framework/Mono.
                </p>
                <img id="aboutEn"/>
                <p>
                Operations on computers and smartphones are executed by processor (CPU) against data which is loaded in system memory (RAM). This memory is not permanent and limited in size, that's why theres always a permanent storage (SSD, HDD, SD Card - aka "disk/drive"). In many cases the performance of the system is determined not only by CPU (which are usually in the spotlight of advertising and target of numerous benchmarks) but by the performance of memory, specifically RAM and storage. Official specs (especially with smartphones) give little description of storage characteristics, beyond capacity. This application attempts to give clear performance characteristics of memory by  isolating and measuring 3 aspects: the speed of reads (transfers from DRIVE-to-RAM). writes (RAM-to-DRIVE) and system memory (copying data from one area in RAM to another).
                </p>
                <p>
                Sequential read and sequential write tests transfer large chunks of data (megabytes) between RAM and Storage. These tests are representative of such disk operations as large file copying, video recording/encoding/decoding etc.
                </p>
                <p>
                Random tests run for 7 seconds each and do transfers in small chunks (4KB and 32KB) at random positions within the test file. These tests show how file system performance influence applications' load times, copying multiple small files, running database queries etc.
                </p>
                <p>
                Write buffering - influences write test. Write operations use intermediary memory buffer and postpone data commit to latter more convenient time for better performance at a cost of less resilient writes (e.g. power failure and not committing to disk write buffer contents).
                </p>
                <p>
                In-memory file cache - influences read tests. Any file operation requires from OS either transferring file data to memory or memory data to disk, OS will keep those memory pages in RAM until there's pressure for RAM from other apps. In case OS receives subsequent file read/write requests through API it will simply copy the cached memory pages from previous file operations and not utilize the actual storage device. Turning this option on is essential a test of OS's file caching subsystem and RAM speed, rather than storage device test.
                </p>
            </div>
        </>
    )
}