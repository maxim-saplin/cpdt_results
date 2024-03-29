import React from 'react';
import PressableLink from './PressableLink';
import DownloadLinks from './DownloadLinks';

export default function About(props){
    return (
        <>
            {props.inApp && <br/>}
            <PressableLink className={props.linkClass} onClick={props.toggleAbout}>[B]返回排行榜</PressableLink>
            <br/>
            {!props.inApp &&
            <div class="downloadBox">
                <h1>下载跨平台硬盘测试软件</h1>
                <br/>
                <DownloadLinks />    
            </div>}

            {!props.download &&
            <> 
            <h1>使用教学与排行榜上传要求</h1>
            <br/>
            <div className="text">
                <p>
                <em>跨平台硬盘测试 (CPDT)</em> 是用于衡量储存设备性能的应用程序。
                {!props.inApp && <> 您可在网页上方下载适用您设备的安装文件。</>}
                </p>
                <p> 当许多设备有多个可用的测量值时，每个测量值都取第 85 个百分位。 </p>
                <p>
                测试时请至少进行3次测试。
                测试结果分为5种数据，每种数据需选择3次测试中最高的一项。也就是说，关于设备的最高性能取决于3次测试中吞吐量数值的最大值。
                </p>
                <p>
                测试前请将这些选项设置正确：测试文件大小为 1GB，关闭写入缓存, 
                关闭内存缓存。若设备具有高速读写（如顺序读写速度超过 1GB/s）
                则测试文件大小提升至 2GB
                </p>
                <p>
                为了避免干扰或其他副作用，测试时应关闭所有后台的应用程序与网络连接（如更新、下载）。
                可用空间不足可能会影响性能（在移动设备上非常明显）。
                请在测试前至少留出 70% 的可用储存空间。
                </p>
                <p>
                测试结果可能会因设备的不同条件而发生变化。
                （例如设备加密开启/关闭，文件系统不同，剩余空间不同等）
                若出现以上情况请在设备名称下注明。
                </p>
            </div>
            <br/>
            </>}
            <h1>本程序是如何运作的</h1>
            <br/>
            <div className="text">
                <p>
                本应用通过调用操作系统的标准文件 API（Windows 上的 WinAPI、Mac 上的 POSIX、Android 上的 NDK）来测试存储设备（机械硬盘、固态硬盘、USB 闪存驱动器）和内存（RAM）之间的数据传输速度（单位为 MB/s）。 API 调用通过 .NET Framework 与 Mono 完成。
                </p>
                <img id="aboutZh" alt=""/>
                <p>
                无论是家用计算机还是智能手机，处理器（CPU）的操作都依赖于加载在系统内存（RAM）中的数据。因为内存具有易失性且容量有限，这也是为什么我们需要外部储存设备（固态硬盘、机械硬盘、SD 卡等，它们也被称作“磁盘”或“驱动器”）。在很多情况下，系统的整体性能不光取决于 CPU（虽然 CPU 的权重的确很高，而且往往是产品营销和跑分软件中的头牌），还取决于储存——具体来说是内部储存（RAM）和外部储存。官方参数（特别是智能手机）往往对储存方面的性能语焉不详。本程序致力于通过独立且合理的3个维度，即：读取速度（从储存设备到内存）、写入速度（从内存到储存设备）、内存复制（从内存的一个区域到另一个区域）来全面评价系统的储存性能。
                </p>
                <p>
                顺序读取与顺序写入测试通过在储存设备和 RAM 之间传输大块数据（MB 级别）来测试复制大文件、视频录制、编码、解码等日常应用环境中的储存性能。
                </p>
                <p>
                随机读取与随机写入通过读写测试文件中的随机位置的小块数据（4KB 和 32KB）来测试文件系统性能对应用加载、小文件复制、数据库查询能力的影响。此测试的运行时间为 7 秒。
                </p>
                <p>
                写入缓存 — 影响写入测试。通过在写入操作中使用中间缓冲区，将写入数据进行排序，以在最佳的写入时机写入数据来提升数据写入能力。其代价是较低的弹性写入能力（例如发生电源故障导致缓冲区内的数据丢失，或是写入那些无法使用缓冲区的数据）。
                </p>
                <p>
                内存缓存 — 影响读取测试。在内存充足的情况下，任何向操作系统发出的文件操作请求，不论是将储存中的数据读入内存，还是将内存中的数据写入储存，操作系统都会将那些内存页保留在内存中待用。后续如果操作系统通过 API 收到的文件读取/写入请求，操作系统将会直接调用之前保留在内存中的内存页，而不是实际的储存设备。启用此选项时，测试结果所反映的是操作系统的内存缓存性能以及内存本身的性能，而非储存设备的性能。
                </p>
            </div>
        </>
    )
}
