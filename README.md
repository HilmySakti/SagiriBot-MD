<p align="center">
<img src="https://i.ibb.co/wBs0kyN/Gambar-Nya-1.jpg" alt="SAGIRI BOT" width="500"/>


</p>
<p align="center">
<a href="#"><img title="SAGIRI BOT MULTI DEVICE" src="https://img.shields.io/badge/SAGIRI BOT MULTI DEVICE-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/HilmySakti/SagiriBot-MD"><img title="Author" src="https://img.shields.io/badge/Author-HilmySakti-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/HilmySakti/SagiriBot-MD"><img title="Followers" src="https://img.shields.io/github/followers/HilmySakti?color=blue&style=flat-square"></a>
<a href="https://github.com/HilmySakti/SagiriBot-MD"><img title="Stars" src="https://img.shields.io/github/stars/HilmySakti/SagiriBot-MD?color=red&style=flat-square"></a>
<a href="https://github.com/HilmySakti/SagiriBot-MD/network/members"><img title="Forks" src="https://img.shields.io/github.com/HilmySakti/SagiriBot-MD?color=red&style=flat-square"></a>
<a href="https://github.com/HilmySakti/SagiriBot-MD/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/HilmySakti/SagiriBot-MD?label=Watchers&color=blue&style=flat-square"></a>
</p>

---

# SAGIRI BOT Whatsapp MD
## Information
> Sagiri Bot whatsapp using a Baileys library.
> Jika kamu menemukan semacam bug, harap untuk dimaklumi sementara
>
> • NOTE: Pastikan Jaringan kalian lancar dan device kalian bagus:v, 
> 
> • Kalo pake termux mungkin bakal lama respon nya, saya sarankan pake heroku
> 
> • Kalo mau nambah fitur buat file baru [disini](https://github.com/HilmySakti/SagiriBot-MD/tree/Multi-Device/plugins) *Contoh* tebakgambar.js


<h3 align="center">Made by :</h3>
<p align="center">
  <a href="https://github.com/ilmanhdyt"><img src="https://github.com/ilmanhdyt.png?size=128" height="100" width="100" /></a>
  <a href="https://github.com/BochilGaming"><img src="https://github.com/BochilGaming.png?size=100" height="100" width="100" /></a>
  <a href="https://github.com/HilmySakti"><img src="https://github.com/HilmySakti.png?size=100" height="100" width="100" /></a>
  <a href="https://github.com/Nurutomo"><img src="https://github.com/Nurutomo.png?size=100" height="100" width="100" /></a>
</p>

## How To Change Menu Display
----
### Gif Menu Display
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Image Menu Display
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/shiraori.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Location Menu Display
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/shiraori.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Video Menu Display
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'mongodb+srv://ilman:<password>@cluster0.iiede.mongodb.net/NameYourDatabase?retryWrites=true&w=majority'`


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/HilmySakti/SagiriBot-MD
cd ShiraoriBOT-Md
npm install
npm update
npm index
```

---------

## UNTUK PENGGUNA TERMUX
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/HilmySakti/SagiriBot-MD
cd ShiraoriBOT-Md
yarn
node .
```

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![Ilman](https://github.com/ilmanhdyt.png?size=150)](https://github.com/ilmanhdyt) | [![Istikmal](https://github.com/BochilGaming.png?size=150)](https://github.com/BochilGaming) | [![HilmySakti](https://github.com/HilmySakti.png?size=150)](https://github.com/HilmySakti) 
----|----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ilman](https://github.com/ilmanhdyt) | [Istikmal](https://github.com/BochilGaming) | [HilmySakti](https://github.com/HilmySakti)
 Author | Recode | yg sering ngebantu 😅 | Recode2 

## Donate
- [Saweria](https://saweria.co/ilmanhdyt)
