var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:5000");

// UNIT test begin
describe("/conta",function(){

    it("Conta repetida",function(done){
        // calling home page api
        server
        .put("/conta")
        .type("json")
        .send({agencia : "123", conta : "54321"})
        .expect("Content-type",/json/)
        .expect(409) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

    it("Conta Invalida",function(done){
        // calling home page api
        server
        .put("/conta")
        .type("json")
        .send({email : '123', senha : '12345'})
        .expect("Content-type",/json/)
        .expect(400) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

});

describe("/conta/entraConta",function(){

    it("Conta inexistente",function(done){
        // calling home page api
        server
        .post("/conta/entraConta")
        .type("json")
        .send({agencia : "9999999", conta : "11111111"})
        .expect("Content-type",/json/)
        .expect(404) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

    it("Conta Valida",function(done){
        // calling home page api
        server
        .post("/conta/entraConta")
        .type("json")
        .send({agencia : "123", conta : "54321"})
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

});

describe("/conta/buscaConta",function(){

    it("Termo inexistente",function(done){
        // calling home page api
        server
        .post("/conta/buscaConta")
        .type("json")
        .send({term : "9999999"})
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            res.body.should.have.lengthOf(0);
            done(err);
        });
    });

    it("Termo existente",function(done){
        // calling home page api
        server
        .post("/conta/buscaConta")
        .type("json")
        .send({term : "54321"})
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            res.body.should.have.lengthOf(1);
            done(err);
        });
    });

});