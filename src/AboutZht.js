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
                <h1>下載跨平臺硬碟測試軟體</h1>
                <br/>
                <DownloadLinks />    
            </div>}

            {!props.download &&
            <> 
            <h1>使用教學與排行榜上傳要求</h1>
            <br/>
            <div className="text">
                <p>
                <em>跨平臺硬碟測試 (CPDT)</em> 是用於衡量儲存裝置效能的應用程式。
                {!props.inApp && <> 您可在網頁上方下載適用您裝置的安裝檔案。</>}
                </p>
                <p> 當許多設備有多個可用的測量值時，每個測量值都取第 90 個百分位。 </p>
                <p>
                測試時請至少進行3次測試。
                測試結果分為5種資料，每種資料需選擇3次測試中最高的一項。也就是說，關於裝置的最高效能取決於3次測試中吞吐量數值的最大值。
                </p>
                <p>
                測試前請將這些選項設定正確：測試檔案大小為 1GB，關閉寫入快取, 
                關閉記憶體快取。若裝置具有高速讀寫（順序讀寫速度超過 1GB/s）
                則測試檔案大小提升至 2GB。
                </p>
                <p>
                為了避免干擾或其他副作用，測試時應關閉所有後臺的應用程式與網路連線（如更新、下載）。
                可用空間不足可能會影響效能（在移動裝置上非常明顯）。
                請在測試前至少留出 70% 的可用儲存空間。
                </p>
                <p>
                測試結果可能會因裝置的不同條件而發生變化。
                （例如裝置加密開啟/關閉，檔案系統不同，剩餘空間不同等）
                若出現以上情況請在裝置名稱下注明。
                </p>
            </div>
            <br/>
            </>}
            <h1>本程式是如何運作的</h1>
            <br/>
            <div className="text">
                <p>
                本應用通過呼叫作業系統的標準檔案 API（Windows 上的 WinAPI、Mac 上的 POSIX、Android 上的 NDK）來測試儲存裝置（機械硬碟、固態硬碟、USB 快閃記憶體驅動器）和記憶體（RAM）之間的資料傳輸速度（單位為 MB/s）。 API 呼叫通過 .NET Framework 與 Mono 完成。
                </p>
                <img id="aboutZht" alt=""/>
                <p>
                無論是家用計算機還是智慧手機，處理器（CPU）的操作都依賴於載入在系統記憶體（RAM）中的資料。因為記憶體具有易失性且容量有限，這也是為什麼我們需要外部儲存裝置（固態硬碟、機械硬碟、SD 卡等，它們也被稱作“磁碟”或“驅動器”）。在很多情況下，系統的整體效能不光取決於 CPU（雖然 CPU 的權重的確很高，而且往往是產品營銷和跑分軟體中的頭牌），還取決於儲存——具體來說是內部儲存（RAM）和外部儲存。官方參數（特別是智慧手機）往往對儲存方面的效能語焉不詳。本程式致力於通過獨立且合理的3個維度，即：讀取速度（從儲存裝置到記憶體）、寫入速度（從記憶體到儲存裝置）、記憶體複製（從記憶體的一個區域到另一個區域）來全面評價系統的儲存效能。
                </p>
                <p>
                順序讀取與順序寫入測試通過在儲存裝置和 RAM 之間傳輸大塊資料（MB 級別）來測試複製大檔案、視訊錄製、編碼、解碼等日常應用環境中的儲存效能。
                </p>
                <p>
                隨機讀取與隨機寫入通過讀寫測試檔案中的隨機位置的小塊資料（4KB 和 32KB）來測試檔案系統效能對應用載入、小檔案複製、資料庫查詢能力的影響。此測試的執行時間為 7 秒。
                </p>
                <p>
                寫入快取 — 影響寫入測試。通過在寫入操作中使用中間緩衝區，將寫入資料進行排序，以在最佳的寫入時機寫入資料來提升資料寫入能力。其代價是較低的彈性寫入能力（例如發生電源故障導致緩衝區內的資料丟失，或是寫入那些無法使用緩衝區的資料）。
                </p>
                <p>
                記憶體快取 — 影響讀取測試。在記憶體充足的情況下，任何向作業系統發出的檔案操作請求，不論是將儲存中的資料讀入記憶體，還是將記憶體中的資料寫入儲存，作業系統都會將那些記憶體頁保留在記憶體中待用。後續如果作業系統通過 API 收到的檔案讀取/寫入請求，作業系統將會直接呼叫之前保留在記憶體中的記憶體頁，而不是實際的儲存裝置。啟用此選項時，測試結果所反映的是作業系統的記憶體快取效能以及記憶體本身的效能，而非儲存裝置的效能。
                </p>
            </div>
        </>
    )
}
