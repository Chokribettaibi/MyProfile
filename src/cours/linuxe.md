#### Download you-tube video from terminal in ubuntu.

``` linux
  sudo apt-get install youtube-dl

  youtube-dl [https://www....]
```

#### Pour voir l’espace disponible sur le disque dur sous Linux (Ubuntu), tu peux utiliser plusieurs commandes dans le terminal. Voici les plus courantes

1-  commande `df` : _disk free_

Tu verras une sortie comme:

```bash
Système de fichiers     Taille Utilisé Dispo Uti% Monté sur
/dev/sda1                 100G     60G   35G  64% /
tmpfs                     2.0G    2.0M  2.0G   1% /run
```

- `df -h` : (`-h`):: signifie "human-readable", c à d que lestailles affichées en **Mo, Go, etc.**

2- commande `lsblk` : _list block devices_

#### Commande : **history**

la commande `history` affiche la liste des commandes que tu as exécutées dans ton terminal (shell).

**syntaxe de base**

```bash
history
```

-> Affiche l'historique compler (souvent limité aux 500 ou 1000 derinères commandes).

Afficher les 10 dernières commandes:

```bash
history | tail -10
```