/*  Aufgabe: Aufgabe 8
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 10.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Franziska Heiß, Sofia Gschwend, Sabrina Kerl, Anna Lotz und Alena Hurst erarbeitet*/
"use strict";
const Http = require("http");
const Url = require("url");
const Database = require("./Database");
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
let server = Http.createServer();
server.addListener("request", handleRequest);
server.listen(port);
//Switch Abfrage mit den verschiednene Fällen und den entsprechenden Funktionen, die ausgeführt werden sollen      
function handleRequest(_request, _response) {
    console.log("Request");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let query = Url.parse(_request.url, true).query;
    console.log(query["command"]);
    if (query["command"]) {
        switch (query["command"]) {
            case "insert":
                insert(query, _response);
                break;
            case "refresh":
                refresh(_response);
                break;
            case "search":
                search(query, _response);
                break;
            default:
                error();
        }
    }
    //_response.end();
}
//Daten des Studi werden als Objekte übergeben      
function insert(query, _response) {
    let obj = JSON.parse(query["data"]);
    let _firstname = obj.firstname;
    let _name = obj.name;
    let matrikel = obj.matrikel.toString();
    let _age = obj.age;
    let _gender = obj.gender;
    let _studyPath = obj.studyPath;
    let studi;
    studi = {
        firstname: _firstname,
        name: _name,
        matrikel: parseInt(matrikel),
        age: _age,
        gender: _gender,
        studyPath: _studyPath
    };
    Database.insert(studi);
    handleResponse(_response, "Daten wurden gespeichert"); //Rückmeldung für den User
}
function refresh(_response) {
    Database.findAll(function (json) {
        handleResponse(_response, json);
    });
}
function search(query, _response) {
    let searchedMatrikel = parseInt(query["searchFor"]);
    Database.findStudent(searchedMatrikel, function (json) {
        handleResponse(_response, json);
    });
}
function error() {
    alert("Error");
}
function handleResponse(_response, _text) {
    _response.write(_text);
    _response.end();
}
//# sourceMappingURL=Server.js.map