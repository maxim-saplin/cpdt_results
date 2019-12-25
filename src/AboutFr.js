import React from 'react';
import PressableLink from './PressableLink';
import DownloadLinks from './DownloadLinks';

export default function About(props){
    return (
        <>
            {props.inApp && <br/>}
            <PressableLink className={props.linkClass} onClick={props.toggleAbout}>[R]etour aux résultats</PressableLink>
            <br/>
            {!props.inApp &&
            <div class="downloadBox">
                <h1>Télécharger CPDT Benchmark</h1>
                <br/>
                <DownloadLinks />    
            </div>}

            {!props.download &&
            <> 
            <h1>Comment les résultats du graphique sont-ils obtenus</h1>
            <br/>
            <div className="text">
                <p>
                <em>Cross Platform Disk Test (CPDT)</em> l'application est utilisée pour mesurer les performances de stockage. 
                {!props.inApp && <>Voir les liens de téléchargement ci-dessus.</>}
                </p>
                <p>
                Au moins 3 essais sont effectués,
                pour chacune des 5 mesures de performance, la meilleure est sélectionnée. C'est à dire. l'ensemble de 5 mesures associées à un certain appareil
                sont les plus grandes de toutes les valeurs de débit moyen obtenues lors des tests.
                </p>
                <p>
                Les tests sont exécutés avec les options suivantes: la taille du fichier est de 1 Go, le tampon d'écriture est désactivé,
                le cache en mémoire est désactivé. Pour les appareils très rapides (vitesses séquentielles supérieures à 1 Go / s)
                la taille du fichier est augmentée à 2 Go.
                </p>
                <p>
                Pour éviter les interférences et les effets secondaires, toutes les applications en cours d'exécution sont fermées, l'activité réseau est désactivée (par exemple, mises à jour, téléchargements).
                Étant donné que le manque d'espace disque libre affecte les performances (très visible sur les appareils mobiles)
                le test est effectué sur au moins 70% de l'espace disponible sur le lecteur.
                </p>
                <p>
                Dans les résultats du test, vous pouvez trouver le même appareil testé dans différentes conditions
                (par exemple, chiffrement activé / désactivé, différents systèmes de fichiers, différents espaces libres, etc.)
                qui dans un tel cas est noté sous le nom de l'appareil.
                </p>
            </div>
            <br/>
            </>}
            <h1>Comment fonctionne l'application</h1>
            <br/>
            <div className="text">
                <p>
                Cette application utilise l’interface standard API du système d'exploitation (WinAPI pour Windows, POSIX pour Mac et NDK pour Android) pour mesurer la vitesse de transfert des données (mégaoctets / gigaoctets par seconde) entre le périphérique de stockage (HDD, SSD, clé USB) et la mémoire système (RAM). Les appels aux API sont réalisés via .NET Framework/Mono.
                </p>
                <img id="aboutEn"/>
                <p>
                Sur les ordinateurs et les smartphones, le processeur central n’effectue des opérations que sur les données chargées dans la RAM. Cette mémoire n’est pas permanente et sa taille est limitée, c’est pourquoi le système dispose toujours d’une mémoire permanente (SSD, disque dur, carte SD - ci-après le "disque"). Dans de nombreux cas, la performance du système est déterminée non seulement par le processeur (qui est souvent au centre d’attention des publicités et des benchmarks), mais aussi par la performance de la mémoire, en particulier de la RAM et du disque. Les spécifications officielles (notamment celles des smartphones) présentent peu d'informations sur les caractéristiques de la mémoire, sauf peut-être celles des volumes. Cette application cherche à définir clairement les performances de la mémoire en mettant en évidence et en évaluant trois aspects: la vitesse de lecture (transfert de données du disque vers la RAM), l’écriture (de la RAM vers le disque) et la vitesse de la RAM (copie de données d’une zone de RAM à une autre).
                </p>
                <p>
                Les tests de lecture/écriture séquentielle mesurent la vitesse des opérations, dans lesquelles de gros blocs (mégaoctets) de données sont transmis de manière séquentielle. Ces tests représentent des opérations telles que la copie de fichiers volumineux, le codage/décodage vidéo, etc.
                </p>
                <p>
                Les tests aléatoires durent plusieurs dizaines de secondes et transmettent de petits blocs de données (4 KB) dans des positions aléatoires dans un fichier de test. Ces tests montrent comment la performance du système de fichiers influence le temps de chargement des applications et du système d'exploitation, le processus de copie de plusieurs petits fichiers, l'exécution de requêtes de base de données, etc.
                </p>
                <p>
                La mise en mémoire tampon de l'écriture - influence les tests d'écriture. Lors des opérations d'écriture, le système d'exploitation peut utiliser une mémoire tampon intermédiaire et retarder l’écriture réelle data commit à des moments plus opportuns (par exemple, lorsqu’une certaine quantité de données est collectée et qu’une grande partie des données peut être sauvegardée à la fois). Ce mode augmente les performances d'écriture au moyen d'une fiabilité moindre (par exemple, dans le cas de coupure de courant certaines données peuvent être perdues).
                </p>
                <p>
                Le cache de fichier en mémoire - influence les tests de lecture. Pour toutes les opérations de fichiers, le système d'exploitation transfère les données du disque vers la mémoire (lecture) ou depuis la mémoire vers le disque (écriture). Le système d'exploitation stocke ces données dans la RAM jusqu'à ce que d'autres applications en aient besoin. À la réception de demandes de lecture/d’écriture d'un fichier, le système d'exploitation vérifie si les données ont déjà été lues depuis un fichier et si elles sont déjà en mémoire. S'il y a des données codées dans la mémoire, le système d'exploitation ne s'accédera pas au fichier et copiera de la mémoire (ce qui est beaucoup plus rapide que d'accéder au disque). En fait, l’activation de cette option ne teste pas le périphérique de stockage, mais le mécanisme de mise en cache et la RAM.
                </p>
            </div>
        </>
    )
}