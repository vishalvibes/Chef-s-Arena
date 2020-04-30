# Chef-s-Arena
 
<b>If you have Redis, mysql, php 7.4, composer and node installed properly, then use the below commands</b><br><br><br>
<b>TO INSTALL EVERYTHING (REQUIRED ONLY ONCE)</b><br>
```sudo npm install```<br>
```sudo npm run install```
<br>
<br>
<b>TO RUN DEVELOPMENT SERVER</b><br>
```npm run dev```<br>
<br>
<b>TO BUILD A DEPLOYMENT</b><br>
```npm run build```<br><br>
<br>
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

<b>Setting up Redis</b><br>
https://redis.io/download<br>
https://github.com/phpredis/phpredis<br><br>

<b>Setting up php and mysql</b><br>
https://www.vultr.com/docs/how-to-install-apache-mysql-and-php-on-ubuntu-17-04<br>





