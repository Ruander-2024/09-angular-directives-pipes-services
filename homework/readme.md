A mellékelt adatsor adataival készíts el egy listázó felületet! Hozz létre egy új angular projektet listing-app néven!

# 1. feladat

Készítsd interfacet a User-nek.
User mezői:
"id",
"first_name",
"last_name",
"email",
"salary"
"expiration_date" (unix timestamp) - string
"deletedUser" - boolean
models mappa/user.model.ts - interface
models mappa/users.ts - users tömb exportálva, ez beimportálható majd a service-ban

Használd a components, services, models mappa struktúrát.
Hozz létre 1 komponenst listing-app néven.
Hozz létre 1 service-t data néven

# 2. feladat

Az adatok táblázatos formában jelenjenek meg! A kilistázást a html template-ben ngFor direktívával hozd létre! A sorokban legyen egy Delete gomb, amely az adott sor láthatóságát kikapcsolja (ngIf). Minden második sornak más legyen a formázása ([ngClass] vagy [ngStyle] és az index segítségével).
Példa class name 'table-primary' adott tr tag-re kell ráhelyeni, mint osztáy. (kötőjel miatt kell a '' a class körül)

# 3. feladat - Pipes

"first_name" - néhol hibáztak a felhasználók, nagy kezdőbetűvel kezdődjön, a többi legyen kicsit
"last_name" - belső használatra kell a lastname ből az első két karakter nagybetűként
"email", - néhol nagybetűt használtak a felhasználók, legyen minden kisbetűs
"salary" - dollárként jelenjen meg a fizetés
"expiration_date" - A dátumot formázd meg a date pipe segítségével (a unix timestampből így készíthetsz JS Date objektumot) Az alábbi formátumban jelenjen meg a dátum: 2021 February 01

# 4. feladat

Hozz létre gombokat az oldalon, amelyek segítségével csak a páratlan vagy páros id-jű felhasználókat listázza ki az oldal!

# 5.feladat

Szervezd ki szervízbe mind az adatsort, mind a páros és páratlan id-jű felhasználókra való szűrést, és csak ezeket használd fel a komponensedben!
