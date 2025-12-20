# User Management Backend

Bu proje, kullanıcıların kayıt olabildiği ve giriş yapabildiği basit bir kullanıcı yönetim sistemidir.

Backend tarafı Node.js ve Express kullanılarak geliştirilmiştir. Veriler PostgreSQL veritabanında tutulur. Kullanıcı doğrulama işlemleri JWT (JSON Web Token) ile yapılır.

## Kullanılan Teknolojiler
- Node.js
- Express.js
- PostgreSQL
- JWT (Authentication)
- bcrypt (Şifreleme)

## Proje Özellikleri
- Kullanıcı kayıt (Register)
- Kullanıcı giriş (Login)
- JWT ile korumalı endpoint
- Kullanıcı rolleri (admin / user)
- Şifrelerin güvenli şekilde saklanması

## Kurulum ve Çalıştırma
Projeyi çalıştırmak için aşağıdaki adımları izleyin:

```bash
npm install
npm start
