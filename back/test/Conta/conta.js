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
        .expect(422) // THis is HTTP response
        .end(function(err,res){
            done(err);
        });
    });

});