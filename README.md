# Chef-s-Arena
 
<b>If you have Redis, mysql, php 7.4, composer and node installed properly, then use the below commands</b>
TO INSTALL EVERYTHING (REQUIRED ONLY ONCE)
```sudo npm install```
```sudo npm run install```

TO RUN DEVELOPMENT SERVER
```npm run dev```

TO BUILD A DEPLOYMENT
```npm run build```

<b>setting up database from dump from mySQL workbench dump</b><br>
>>Open mysql workbench<br>
>>Go to 'server' then 'import database'<br>
>>check if a database named 'testreact' with a table named 'users' and a user on localhost named 'my_user' is created<br>


<b>setting up database if importing doesn't work</b><br>
>>Open mysql as root<br>
>>type the following commands <br>
>>>```CREATE DATABASE testreact;```<br>
>>>```USE testreact;```<br>
>>>```CREATE TABLE users(id varchar(50),password varchar(50),token varchar(100), refresh varchar(100));```<br>
>>then create a user named 'my_user'@'localhost' with password as 'password' and grant all permissions<br>
>>for more reference see /server/includes/connection.php<br>

<b>Setting up backend</b><br>
>>Install apache2 server<br>
>>Install php 7.2 or above<br>
>>Install composer<br>
>>put all the files in '/server' to '/var/www/html'  folder in your system<br>
>>cofigure apache server to allow hosting all files, set AllowOverride to All and set index to index.php<br>
>>make a file .htaccess in the '/var/www/html' folder with the following content
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

 <IfModule mod_headers.c>
   Header set Access-Control-Allow-Origin "*"
 </IfModule>

 DirectoryIndex index.php
```
>>Run apache server<br>
>>Open localhost:80<br>
>>A new app should be made in codechef developers console with localhost:80 as redirect URI then in client id and client secret id should be changed in index.php and curlFunctions.php<br>

<b>Setting up react server is not required</b>




