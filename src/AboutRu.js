import React from 'react';
import PressableLink from './PressableLink';
import DownloadLinks from './DownloadLinks';

export default function About(props){
    return (
        <>
            {props.inApp && <br/>}
            <PressableLink className={props.linkClass} onClick={props.toggleAbout}>[B] Назад к списку</PressableLink>
            <br/>
            {!props.inApp &&
            <div class="downloadBox">
                <h1>Скачать CPDT Бенчмарк</h1>
                <br/>
                <DownloadLinks />    
            </div>}

            {!props.download &&
            <> 
            <h1>Как получены результаты для списка</h1>
            <br/>
            <div className="text">
                <p>
                Для измерения производительности используется приложение <em>Cross Platform Disk Test (CPDT)</em>
                {!props.inApp && <>, скачать кооторое можно по ссылкам выше</>}.
                </p>
                <p>
                При наличии данных с некскольких устройств приводится 85-й персентиль для каждого из измерений.
                </p>
                <p>
                Если данные полученвы с одного устройства, выполняется по меньшей мере 3 тестовых прогона, 
                для каждого из 5-ти показателей выбирается наилучший результат. Т.о. представленная для каждого устройства
                пятерка результатов - это наилучшие из полученных значений средней пропускной способности.
                </p>
                <p>
                Тесты выполняются со следующими настройками: размер файла 1Гб, буферизация записи выключена, 
                кеширование в памяти выключено. Для устройств с быстрыми дисками (последовательные скорости более 1Гб/с)
                размер файла увеличивается до 2Гб.
                </p>
                <p>
                Для исключения влияния на результаты сторонней активности выгружаются все приложения, отключается сетевая
                активность (обновления, загрузки). Объем свободного пространства существенно влияет на скрость устройств 
                (данный эффект особо заметен на мобильных устройствах), тестирование проводится при не менее чем 70% свободного
                места на диске.
                </p>
                <p>
                Также в результатах можно найти измерения одного и того-же устройства в разных условиях (включено/выключено шифрование,
                различные файловые системы, разное количество свободного места), о чем отдельно указано в примечании под названием
                устройстваю.
                </p>
            </div>
            <br/>
            </>}
            
            <h1>Как работает приложение</h1>
            <br/>
            <div className="text">
                <p>
                Приложение использует  стандартный API операционной системы (WinAPI для Windows, POSIX на Mac и NDK на Android) для измерения скорости передачи данных (мегабайты/гигабайты в секунду) между устройством хранения (HDD, SSD, флешка) и системной памятью (ОЗУ). Вызовы к API операционных системы реализованы через .NET Framework/Mono.
                </p>
                <img id="aboutRu" alt=""/>
                <p>
                В компьютерах и смартфонах центральный процессор выполняет операции только над данными, которые загружены в оперативную память (ОЗУ). Данная память не постоянная и ограничена в размере, потому в системе всегда присутствует постоянное хранилище (SSD, жесткий диск, SD карта - для простоты "диск"). Во многих случаях производительность системы определяется не только процессором (который зачастую находится в центре внимания в рекламе и бенчмарках) но и производительностью памяти, в частности ОЗУ и диска. Официальные спецификации (особенно это актуально для смартфонов) дают мало информации о характеристиках памяти, кроме разве что объемов. Данное приложение пытается дать четкие характеристики производительности памяти посредством выделения и оценки трех аспектов: скорости чтения (передача данных с диска в ОЗУ), записи (ОЗУ-диск) и непосредственно скорости ОЗУ (копирование блоков внутри ОЗУ).
                </p>
                <p>
                Тесты последовательной записи и чтения измеряют скорость операций, при которых большие блоки (мегабайты) данных передаются последовательно. Данные тесты соответствуют таким операциям, как копирование больших файлов, кодирование/декодирование видео и т.д.    
                </p>
                <p>
                Тесты с произвольным доступом выполняются на протяжении нескольких десятков секунд и передают небольшие блоки данных (4КБ) в случайных позициях файла. Данные тесты показывают производительность файловой системы в таких задачах, как время загрузки приложений и ОС, копирование большого количества маленьких файлов, выполнение запросов баз данных и т.п.
                </p>
                <p>
                Буферизация записи - влияет на тесты записи. При записи ОС может использовать промежуточный буфер в памяти и откладывать фактическую запись до поздних более удобных моментов (например когда соберется некоторое количество данных и можно за раз сохранить большую порцию данных). Данный режим увеличивает производительность записи за счет меньшей надежности (например, при отключении питания часть данных может быть потеряна).
                </p>
                <p>
                Файловый кэш в памяти - влияет на тесты чтения. При любых файловых операциях ОС либо переносит данные с диска в память (чтение), либо из памяти на диск (запись). При этом данные будут оставлены в памяти до тех пор, пока она не потребуется другим приложениям. При получении запроса на чтение из файла, ОС проверит, считывались ли данные из файл ранее и содержится ли они уже в памяти. При наличии закэшированных данных в памяти ОС не будет обращаться к файлу и сделает копирование из памяти (которое существенно быстрее доступа к диску). Включение данной опции по сути тестирует не устройство хранение, а механизм кеширования и ОЗУ.
                </p>
            </div>
        </>
    )
}