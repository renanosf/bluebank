var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:5000");

// UNIT test begin
describe("/transferencia",function(){

    it("Transferencia Valida",function(done){
        // calling home page api
        server
        .put("/transferencia")
        .type("json")
        .send({remetente : "1", destinatario : "2", valor : "45.90"})
        .expect("Content-type",/json/)
        .expect(201) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

    it("Parametros Insuficientes",function(done){
        // calling home page api
        server
        .put("/transferencia")
        .type("json")
        .send({email : '123', senha : '12345'})
        .expect("Content-type",/json/)
        .expect(400) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

    it("Saldo Insuficientes",function(done){
        // calling home page api
        server
        .put("/transferencia")
        .type("json")
        .send({remetente : "1", destinatario : "2", valor : "500045.90"})
        .expect("Content-type",/json/)
        .expect(409) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

    it("Remetente inexistente",function(done){
        // calling home page api
        server
        .put("/transferencia")
        .type("json")
        .send({remetente : "99999", destinatario : "2", valor : "50.90"})
        .expect("Content-type",/json/)
        .expect(409) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

    it("Destinatario inexistente",function(done){
        // calling home page api
        server
        .put("/transferencia")
        .type("json")
        .send({remetente : "1", destinatario : "99999", valor : "50.90"})
        .expect("Content-type",/json/)
        .expect(409) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });



});