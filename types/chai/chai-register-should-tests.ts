/// <reference types="node" />
import { assert, config, expect, Should, use, util } from "chai";
import "chai/register-should";

const should = Should();

function assertion() {
    expect("test").to.be.a("string");
    "test".should.be.a("string");
    expect("foo").to.equal("foo");
    "foo".should.equal("foo");
    should.equal("foo", "foo");
}

function fail() {
    should.fail("foo", "bar");
    should.fail("foo", "bar", "should fail");

    expect.fail("foo", "bar");
    expect.fail("foo", "bar", "should fail");
}

function _true() {
    expect(true).to.be.true;
    true.should.be.true;
    expect(false).to.not.be.true;
    false.should.not.be.true;
    expect(1).to.not.be.true;
    (1).should.not.be.true;

    expect("test").to.be.true;
    "test".should.be.true;
}

function ok() {
    expect(true).to.be.ok;
    true.should.be.ok;
    expect(false).to.not.be.ok;
    false.should.not.be.ok;
    expect(1).to.be.ok;
    (1).should.be.ok;
    expect(0).to.not.be.ok;
    (0).should.not.be.ok;

    expect("").to.be.ok;
    "".should.be.ok;

    expect("test").to.not.be.ok;
    "test".should.not.be.ok;
}

function _false() {
    expect(false).to.be.false;
    false.should.be.false;
    expect(true).to.not.be.false;
    true.should.not.be.false;
    expect(0).to.not.be.false;
    (0).should.not.be.false;

    expect("").to.be.false;
    "".should.be.false;
}

function _null() {
    expect(null).to.be.null;
    should.equal(null, null);
    expect(false).to.not.be.null;
    false.should.not.be.null;

    expect("").to.be.null;
    "".should.be.null;
}

function _undefined() {
    expect(undefined).to.be.undefined;
    should.equal(undefined, undefined);
    expect(null).to.not.be.undefined;
    should.not.equal(null, undefined);

    expect("").to.be.undefined;
    "".should.be.undefined;
}

function _NaN() {
    expect(NaN).to.be.NaN;
    expect(12).to.be.not.NaN;
    expect("NaN").to.be.not.NaN;
    NaN.should.be.NaN;
    (12).should.be.not.NaN;
    ("NaN").should.be.not.NaN;
}

function exist() {
    const foo = "bar";
    expect(foo).to.exist;
    should.exist(foo);
    expect(void (0)).to.not.exist;
    should.not.exist(void (0));
}

function argumentsTest() {
    const args = arguments;
    expect(args).to.be.arguments;
    args.should.be.arguments;
    expect([]).to.not.be.arguments;
    [].should.not.be.arguments;
    expect(args).to.be.an("arguments").and.be.arguments;
    args.should.be.an("arguments").and.be.arguments;
    expect([]).to.be.an("array").and.not.be.Arguments;
    [].should.be.an("array").and.not.be.Arguments;
}

function equal() {
    expect(undefined).to.equal(void (0));
    should.equal(undefined, void (0));
}

function containSubset() {
    expect({}).to.containSubset({});
    ({}).should.containSubset({});
}

function _typeof() {
    expect("test").to.be.a("string");
    "test".should.be.a("string");

    expect("test").to.not.be.a("string");
    "test".should.not.be.a("string");

    expect(arguments).to.be.an("arguments");
    arguments.should.be.an("arguments");

    expect(5).to.be.a("number");
    (5).should.be.a("number");

    // tslint:disable-next-line:no-construct
    expect(new Number(1)).to.be.a("number");
    // tslint:disable-next-line:no-construct
    (new Number(1)).should.be.a("number");
    expect(Number(1)).to.be.a("number");
    Number(1).should.be.a("number");
    expect(true).to.be.a("boolean");
    true.should.be.a("boolean");
    expect(new Array()).to.be.a("array");
    (new Array()).should.be.a("array");
    expect(new Object()).to.be.a("object");
    (new Object()).should.be.a("object");
    expect({}).to.be.a("object");
    ({}).should.be.a("object");
    expect([]).to.be.a("array");
    [].should.be.a("array");
    expect(() => {
    }).to.be.a("function");
    (() => {
    }).should.be.a("function");
    expect(null).to.be.a("null");
    // N.B. previous line has no should equivalent

    expect(5).to.not.be.a("number", "blah");
    (5).should.not.be.a("number", "blah");
}

function finite() {
    expect(1).to.be.finite;
}

class Foo {
}

function _instanceof() {
    expect(new Foo()).to.be.an.instanceof(Foo);
    (new Foo()).should.be.an.instanceof(Foo);

    expect(3).to.an.instanceof(Foo, "blah");
    (3).should.an.instanceof(Foo, "blah");
}

function within() {
    expect(5).to.be.within(5, 10);
    (5).should.be.within(5, 10);
    expect(5).to.be.within(3, 6);
    (5).should.be.within(3, 6);
    expect(5).to.be.within(3, 5);
    (5).should.be.within(3, 5);
    expect(5).to.not.be.within(1, 3);
    (5).should.not.be.within(1, 3);
    expect("foo").to.have.length.within(2, 4);
    "foo".should.have.length.within(2, 4);
    expect([1, 2, 3]).to.have.length.within(2, 4);
    [1, 2, 3].should.have.length.within(2, 4);

    expect(5).to.not.be.within(4, 6, "blah");
    (5).should.not.be.within(4, 6, "blah");

    expect(10).to.be.within(50, 100, "blah");
    (10).should.be.within(50, 100, "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
    );
    new Date("December 17, 1995 03:24:30").should.not.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
    );

    expect(new Date("December 17, 1995 03:24:30")).to.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
    );
    new Date("December 17, 1995 03:24:30").should.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
    );

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
        "blah",
    );
    new Date("December 17, 1995 03:24:30").should.not.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
        "blah",
    );

    expect(new Date("December 17, 1995 03:24:30")).to.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
        "blah",
    );
    new Date("December 17, 1995 03:24:30").should.be.within(
        new Date("December 17, 1995 03:24:20"),
        new Date("December 17, 1995 03:24:40"),
        "blah",
    );

    expect("foo").to.have.length.within(5, 7, "blah");
    "foo".should.have.length.within(5, 7, "blah");

    expect([1, 2, 3]).to.have.length.within(5, 7, "blah");
    [1, 2, 3].should.have.length.within(5, 7, "blah");
}

function above() {
    expect(5).to.be.above(2);
    (5).should.be.above(2);
    expect(5).to.be.gt(2);
    (5).should.be.gt(2);
    expect(5).to.be.greaterThan(2);
    (5).should.be.greaterThan(2);
    expect(5).to.not.be.above(5);
    (5).should.not.be.above(5);
    expect(5).to.not.be.above(6);
    (5).should.not.be.above(6);
    expect("foo").to.have.length.above(2);
    "foo".should.have.length.above(2);
    expect([1, 2, 3]).to.have.length.above(2);
    [1, 2, 3].should.have.length.above(2);

    expect(5).to.be.above(6, "blah");
    (5).should.be.above(6, "blah");

    expect(10).to.not.be.above(6, "blah");
    (10).should.not.be.above(6, "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.above(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.not.be.above(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.be.above(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.be.above(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.above(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.not.be.above(new Date("December 17, 1995 03:24:20"), "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.be.above(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.be.above(new Date("December 17, 1995 03:24:20"), "blah");

    expect("foo").to.have.length.above(4, "blah");
    "foo".should.have.length.above(4, "blah");

    expect([1, 2, 3]).to.have.length.above(4, "blah");
    [1, 2, 3].should.have.length.above(4, "blah");
}

function least() {
    expect(5).to.be.at.least(2);
    (5).should.be.at.least(2);
    expect(5).to.be.gte(2);
    (5).should.be.gte(2);
    expect(5).to.be.greaterThanOrEqual(2);
    (5).should.be.greaterThanOrEqual(2);
    expect(5).to.be.at.least(5);
    (5).should.be.at.least(5);
    expect(5).to.not.be.at.least(6);
    (5).should.not.be.at.least(6);
    expect("foo").to.have.length.of.at.least(2);
    "foo".should.have.length.of.at.least(2);
    expect([1, 2, 3]).to.have.length.of.at.least(2);
    [1, 2, 3].should.have.length.of.at.least(2);

    expect(5).to.be.at.least(6, "blah");
    (5).should.be.at.least(6, "blah");

    expect(10).to.not.be.at.least(6, "blah");
    (10).should.not.be.at.least(6, "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.least(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.not.be.least(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.be.least(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.be.least(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.least(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.not.be.least(new Date("December 17, 1995 03:24:20"), "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.be.least(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.be.least(new Date("December 17, 1995 03:24:20"), "blah");

    expect("foo").to.have.length.of.at.least(4, "blah");
    "foo".should.have.length.of.at.least(4, "blah");

    expect([1, 2, 3]).to.have.length.of.at.least(4, "blah");
    [1, 2, 3].should.have.length.of.at.least(4, "blah");

    expect([1, 2, 3, 4]).to.not.have.length.of.at.least(4, "blah");
    [1, 2, 3, 4].should.not.have.length.of.at.least(4, "blah");
}

function below() {
    expect(2).to.be.below(5);
    (2).should.be.below(5);
    expect(2).to.be.lt(5);
    (2).should.be.lt(5);
    expect(2).to.be.lessThan(5);
    (2).should.be.lessThan(5);
    expect(2).to.not.be.below(2);
    (2).should.not.be.below(2);
    expect(2).to.not.be.below(1);
    (2).should.not.be.below(1);
    expect("foo").to.have.length.below(4);
    "foo".should.have.length.below(4);
    expect([1, 2, 3]).to.have.length.below(4);
    [1, 2, 3].should.have.length.below(4);

    expect(6).to.be.below(5, "blah");
    (6).should.be.below(5, "blah");

    expect(6).to.not.be.below(10, "blah");
    (6).should.not.be.below(10, "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.below(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.not.be.below(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.be.below(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.be.below(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.below(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.not.be.below(new Date("December 17, 1995 03:24:20"), "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.be.below(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.be.below(new Date("December 17, 1995 03:24:20"), "blah");

    expect("foo").to.have.length.below(2, "blah");
    "foo".should.have.length.below(2, "blah");

    expect([1, 2, 3]).to.have.length.below(2, "blah");
    [1, 2, 3].should.have.length.below(2, "blah");
}

function most() {
    expect(2).to.be.at.most(5);
    (2).should.be.at.most(5);
    expect(2).to.be.lte(5);
    (2).should.be.lte(5);
    expect(2).to.be.lessThanOrEqual(5);
    (2).should.be.lessThanOrEqual(5);
    expect(2).to.be.at.most(2);
    (2).should.be.at.most(2);
    expect(2).to.not.be.at.most(1);
    (2).should.not.be.at.most(1);
    expect(2).to.not.be.at.most(1);
    (2).should.not.be.at.most(1);
    expect("foo").to.have.length.of.at.most(4);
    "foo".should.have.length.of.at.most(4);
    expect([1, 2, 3]).to.have.length.of.at.most(4);
    [1, 2, 3].should.have.length.of.at.most(4);

    expect(6).to.be.at.most(5, "blah");
    (6).should.be.at.most(5, "blah");

    expect(6).to.not.be.at.most(10, "blah");
    (6).should.not.be.at.most(10, "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.most(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.not.be.most(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.be.most(new Date("December 17, 1995 03:24:20"));
    new Date("December 17, 1995 03:24:30").should.be.most(new Date("December 17, 1995 03:24:20"));

    expect(new Date("December 17, 1995 03:24:30")).to.not.be.most(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.not.be.most(new Date("December 17, 1995 03:24:20"), "blah");

    expect(new Date("December 17, 1995 03:24:30")).to.be.most(new Date("December 17, 1995 03:24:20"), "blah");
    new Date("December 17, 1995 03:24:30").should.be.most(new Date("December 17, 1995 03:24:20"), "blah");

    expect("foo").to.have.length.of.at.most(2, "blah");
    "foo".should.have.length.of.at.most(2, "blah");

    expect([1, 2, 3]).to.have.length.of.at.most(2, "blah");
    [1, 2, 3].should.have.length.of.at.most(2, "blah");

    expect([1, 2]).to.not.have.length.of.at.most(2, "blah");
    [1, 2].should.not.have.length.of.at.most(2, "blah");
}

function match() {
    expect("foobar").to.match(/^foo/);
    "foobar".should.match(/^foo/);
    expect("foobar").to.not.match(/^bar/);
    "foobar".should.not.match(/^bar/);

    expect("foobar").matches(/^foo/);
    "foobar".should.not.matches(/^bar/);

    expect("foobar").to.match(/^bar/i, "blah");
    "foobar".should.match(/^bar/i, "blah");

    expect("foobar").to.not.match(/^foo/i, "blah");
    "foobar".should.not.match(/^foo/i, "blah");
}

function length2() {
    expect("test").to.have.length(4);
    "test".should.have.length(4);
    expect("test").to.not.have.length(3);
    "test".should.not.have.length(3);
    expect([1, 2, 3]).to.have.length(3);
    [1, 2, 3].should.have.length(3);

    expect(4).to.have.length(3, "blah");
    (4).should.have.length(3, "blah");

    expect("asd").to.not.have.length(3, "blah");
    "asd".should.not.have.length(3, "blah");
}

function eql() {
    expect("test").to.eql("test");
    "test".should.eql("test");
    expect({ foo: "bar" }).to.eql({ foo: "bar" });
    ({ foo: "bar" }).should.eql({ foo: "bar" });
    expect(1).to.eql(1);
    (1).should.eql(1);
    expect("4").to.not.eql(4);
    "4".should.not.eql(4);

    expect(4).to.eql(3, "blah");
    (4).should.eql(3, "blah");
}

function buffer() {
    expect(new Buffer([1])).to.eql(new Buffer([1]));
    (new Buffer([1])).should.eql(new Buffer([1]));

    expect(new Buffer([0])).to.eql(new Buffer([1]));
    (new Buffer([0])).should.eql(new Buffer([1]));
}

function equal2() {
    expect("test").to.equal("test");
    "test".should.equal("test");
    should.equal("test", "test");
    expect(1).to.equal(1);
    (1).should.equal(1);
    should.equal(1, 1);

    expect(4).to.equal(3, "blah");
    (4).should.equal(3, "blah");
    should.equal(4, 3, "blah");

    expect("4").to.equal(4, "blah");
    "4".should.equal(4, "blah");
    should.equal(4, 4, "blah");
}

function deepEqual() {
    expect({ foo: "bar" }).to.deep.equal({ foo: "bar" });
    ({ foo: "bar" }).should.deep.equal({ foo: "bar" });
    expect({ foo: "bar" }).not.to.deep.equal({ foo: "baz" });
}

function deepEqual2() {
    expect(/a/).to.deep.equal(/a/);
    /a/.should.deep.equal(/a/);
    expect(/a/).not.to.deep.equal(/b/);
    expect(/a/).not.to.deep.equal({});
    expect(/a/g).to.deep.equal(/a/g);
    /a/g.should.deep.equal(/a/g);
    expect(/a/g).not.to.deep.equal(/b/g);
    expect(/a/i).to.deep.equal(/a/i);
    /a/i.should.deep.equal(/a/i);
    expect(/a/i).not.to.deep.equal(/b/i);
    expect(/a/m).to.deep.equal(/a/m);
    /a/m.should.deep.equal(/a/m);
    expect(/a/m).not.to.deep.equal(/b/m);
}

function deepEqual3() {
    const a = new Date(1, 2, 3);
    const b = new Date(4, 5, 6);
    expect(a).to.deep.equal(a);
    a.should.deep.equal(a);
    expect(a).not.to.deep.equal(b);
    a.should.not.deep.equal(b);
    expect(a).not.to.deep.equal({});
    a.should.not.deep.equal({});
}

function deepInclude() {
    expect(["foo", "bar"]).to.deep.include(["bar", "foo"]);
    ["foo", "bar"].should.deep.include(["bar", "foo"]);
    expect(["foo", "bar"]).to.deep.includes(["bar", "foo"]);
    ["foo", "bar"].should.deep.includes(["bar", "foo"]);
    expect(["foo", "bar"]).to.deep.contain(["bar", "foo"]);
    ["foo", "bar"].should.deep.contain(["bar", "foo"]);
    expect(["foo", "bar"]).to.deep.contains(["bar", "foo"]);
    ["foo", "bar"].should.deep.contains(["bar", "foo"]);
    expect(["foo", "bar"]).not.to.deep.equal(["foo", "baz"]);
    ["foo", "bar"].should.not.deep.equal(["foo", "baz"]);
}

class FakeArgs {
    length: number;
}

function empty() {
    FakeArgs.prototype.length = 0;

    expect("").to.be.empty;

    "".should.be.empty;
    expect("foo").not.to.be.empty;
    "foo".should.not.be.empty;
    expect([]).to.be.empty;
    [].should.be.empty;
    expect(["foo"]).not.to.be.empty;
    ["foo"].should.not.be.empty;
    expect(new FakeArgs()).to.be.empty;
    (new FakeArgs()).should.be.empty;
    expect({ arguments: 0 }).not.to.be.empty;
    ({ arguments: 0 }).should.not.be.empty;
    expect({}).to.be.empty;
    ({}).should.be.empty;
    expect({ foo: "bar" }).not.to.be.empty;
    ({ foo: "bar" }).should.not.be.empty;

    expect("").not.to.be.empty;
    "".should.not.be.empty;

    expect("foo").to.be.empty;
    "foo".should.be.empty;
    "foo".should.be.empty;

    expect([]).not.to.be.empty;
    [].should.not.be.empty;

    expect(["foo"]).to.be.empty;
    ["foo"].should.be.empty;

    expect(new FakeArgs()).not.to.be.empty;
    (new FakeArgs()).should.not.be.empty;

    expect({ arguments: 0 }).to.be.empty;
    ({ arguments: 0 }).should.be.empty;

    expect({}).not.to.be.empty;
    ({}).should.not.be.empty;

    expect({ foo: "bar" }).to.be.empty;
    ({ foo: "bar" }).should.be.empty;
}

function property() {
    expect("test").to.have.property("length");
    expect("test").to.have.property(Symbol.for("length"));
    "test".should.have.property("length");
    expect(4).to.not.have.property("length");
    (4).should.not.have.property("length");

    expect({ "foo.bar": "baz" })
        .to.have.property("foo.bar");
    ({ "foo.bar": "baz" }).should.have.property("foo.bar");
    expect({ foo: { bar: "baz" } })
        .to.not.have.property("foo.bar");
    ({ foo: { bar: "baz" } }).should.not.have.property("foo.bar");

    expect("asd").to.have.property("foo");
    "asd".should.have.property("foo");

    expect({ foo: { bar: "baz" } })
        .to.have.property("foo.bar");

    ({ foo: { bar: "baz" } }).should.have.property("foo.bar");
}

function nestedProperty() {
    expect({ "foo.bar": "baz" })
        .to.not.have.nested.property("foo.bar");
    ({ "foo.bar": "baz" }).should
        .not.have.nested.property("foo.bar");
    expect({ foo: { bar: "baz" } })
        .to.have.nested.property("foo.bar");
    ({ foo: { bar: "baz" } }).should
        .have.nested.property("foo.bar");

    expect({ "foo.bar": "baz" })
        .to.have.nested.property("foo.bar");
    ({ "foo.bar": "baz" }).should
        .have.nested.property("foo.bar");
}

function property2() {
    expect("test").to.have.property("length", 4);
    expect("test").to.have.property(Symbol.for("length"), 4);
    "test".should.have.property("length", 4);
    expect("asd").to.have.property("constructor", String);
    "asd".should.have.property("constructor", String);

    expect("asd").to.have.property("length", 4, "blah");
    "asd".should.have.property("length", 4, "blah");

    expect("asd").to.not.have.property("length", 3, "blah");
    "asd".should.not.have.property("length", 3, "blah");

    expect("asd").to.not.have.property("foo", 3, "blah");
    "asd".should.not.have.property("foo", 3, "blah");

    expect("asd").to.have.property("constructor", Number, "blah");
    "asd".should.have.property("constructor", Number, "blah");
}

function nestedProperty2() {
    expect({ foo: { bar: "baz" } })
        .to.have.nested.property("foo.bar", "baz");
    ({ foo: { bar: "baz" } }).should
        .have.nested.property("foo.bar", "baz");

    expect({ foo: { bar: "baz" } })
        .to.have.nested.property("foo.bar", "quux", "blah");
    ({ foo: { bar: "baz" } }).should
        .have.nested.property("foo.bar", "quux", "blah");
    expect({ foo: { bar: "baz" } })
        .to.not.have.nested.property("foo.bar", "baz", "blah");
    ({ foo: { bar: "baz" } }).should
        .not.have.nested.property("foo.bar", "baz", "blah");
    expect({ foo: 5 })
        .to.not.have.nested.property("foo.bar", "baz", "blah");
    ({ foo: 5 }).should
        .not.have.nested.property("foo.bar", "baz", "blah");
}

function own() {
    expect("test").to.have.own.property("length");
    expect("test").to.own.property("length");
    expect({ length: 12 }).to.have.own.property("length");
    expect({ length: 12 }).to.not.have.own.property("length", "blah");
}

function ownProperty() {
    expect("test").to.have.ownProperty("length");
    expect("test").to.have.ownProperty(Symbol.for("length"));
    "test".should.have.ownProperty("length");
    expect("test").to.haveOwnProperty("length");
    "test".should.haveOwnProperty("length");
    expect({ length: 12 }).to.have.ownProperty("length");
    ({ length: 12 }).should.have.ownProperty("length");
    expect({ length: 12 }).to.have.ownProperty("length", 12);
    ({ length: 12 }).should.have.ownProperty("length", 12);
    expect({ length: 12 }).to.have.ownProperty("length", 12, "blah");
    ({ length: 12 }).should.have.ownProperty("length", 12, "blah");

    expect({ length: 12 }).to.not.have.ownProperty("length", "blah");
    ({ length: 12 }).should.not.have.ownProperty("length", "blah");

    expect("test").to.have.own.property("length");
    expect("test").to.have.own.property(Symbol.for("length"));
    "test".should.have.own.property("length");
    expect({ length: 12 }).to.have.own.property("length");
    ({ length: 12 }).should.have.own.property("length");
    expect({ length: 12 }).to.have.own.property("length", 12);
    ({ length: 12 }).should.have.own.property("length", 12);
    expect({ length: 12 }).to.have.own.property("length", 12, "blah");
    ({ length: 12 }).should.have.own.property("length", 12, "blah");

    expect({ length: 12 }).to.not.have.own.property("length", "blah");
    ({ length: 12 }).should.not.have.own.property("length", "blah");

    expect("test").to.have.an.own.property("length");
    "test".should.have.an.own.property("length");
    expect({ length: 12 }).to.have.an.own.property("length");
    ({ length: 12 }).should.have.an.own.property("length");
    expect({ length: 12 }).to.have.an.own.property("length", 12);
    ({ length: 12 }).should.have.an.own.property("length", 12);
    expect({ length: 12 }).to.have.an.own.property("length", 12, "blah");
    ({ length: 12 }).should.have.an.own.property("length", 12, "blah");

    expect({ length: 12 }).to.not.have.an.own.property("length", "blah");
    ({ length: 12 }).should.not.have.an.own.property("length", "blah");
}

function ownPropertyDescriptor() {
    expect("test").to.have.ownPropertyDescriptor("length");
    expect("test").to.have.ownPropertyDescriptor(Symbol.for("length"));
    expect("test").to.have.ownPropertyDescriptor("length", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 4,
    });
    expect("test").not.to.have.ownPropertyDescriptor("length", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 3,
    });
    expect("test").to.haveOwnPropertyDescriptor("length").to.have.property("enumerable", false);
    expect("test").to.haveOwnPropertyDescriptor("length").to.contain.keys("value");

    "test".should.have.ownPropertyDescriptor("length");
    "test".should.have.ownPropertyDescriptor("length", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 4,
    });
    "test".should.not.have.ownPropertyDescriptor("length", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 3,
    });
    "test".should.haveOwnPropertyDescriptor("length").to.have.property("enumerable", false);
    "test".should.haveOwnPropertyDescriptor("length").to.contain.keys("value");
    "test".should.have.an.ownPropertyDescriptor("length");
}

function string() {
    expect("foobar").to.have.string("bar");
    "foobar".should.have.string("bar");
    expect("foobar").to.have.string("foo");
    "foobar".should.have.string("foo");
    expect("foobar").to.not.have.string("baz");
    "foobar".should.not.have.string("baz");

    expect(3).to.have.string("baz");
    (3).should.have.string("baz");

    expect("foobar").to.have.string("baz", "blah");
    "foobar".should.have.string("baz", "blah");

    expect("foobar").to.not.have.string("bar", "blah");
    "foobar".should.not.have.string("bar", "blah");
}

function include() {
    expect(["foo", "bar"]).to.include("foo");
    ["foo", "bar"].should.include("foo");
    expect(["foo", "bar"]).to.include("foo");
    ["foo", "bar"].should.include("foo");
    expect(["foo", "bar"]).to.include("bar");
    ["foo", "bar"].should.include("bar");
    expect([1, 2]).to.include(1);
    [1, 2].should.include(1);
    expect(["foo", "bar"]).to.not.include("baz");
    ["foo", "bar"].should.not.include("baz");
    expect(["foo", "bar"]).to.not.include(1);
    ["foo", "bar"].should.not.include(1);

    expect(["foo", "bar"]).includes("foo");
    ["foo", "bar"].should.includes("foo");

    expect(["foo"]).to.include("bar", "blah");
    ["foo"].should.include("bar", "blah");

    expect(["bar", "foo"]).to.not.include("foo", "blah");
    ["bar", "foo"].should.not.include("foo", "blah");
}

function keys() {
    expect({ foo: 1 }).to.have.keys(["foo"]);
    ({ foo: 1 }).should.have.keys(["foo"]);
    expect({ foo: 1, bar: 2 }).to.have.keys(["foo", "bar"]);
    ({ foo: 1, bar: 2 }).should.have.keys(["foo", "bar"]);
    expect({ foo: 1, bar: 2 }).to.have.keys("foo", "bar");
    ({ foo: 1, bar: 2 }).should.have.keys("foo", "bar");
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys("foo", "bar");
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys("foo", "bar");
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys("bar", "foo");
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys("bar", "foo");
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys("baz");
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys("baz");
    // alias

    expect({ foo: 1, bar: 2, baz: 3 }).contains.keys("baz");

    expect({ foo: 1, bar: 2 }).to.have.all.keys(["foo", "bar"]);
    expect({ foo: 1, bar: 2 }).to.have.any.keys(["foo", "bar"]);
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.all.keys("baz");
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.any.keys("baz");

    expect({ foo: 1, bar: 2 }).to.contain.keys("foo");
    ({ foo: 1, bar: 2 }).should.contain.keys("foo");
    expect({ foo: 1, bar: 2 }).to.contain.keys("bar", "foo");
    ({ foo: 1, bar: 2 }).should.contain.keys("bar", "foo");
    expect({ foo: 1, bar: 2 }).to.contain.keys(["foo"]);
    ({ foo: 1, bar: 2 }).should.contain.keys(["foo"]);
    expect({ foo: 1, bar: 2 }).to.contain.keys(["bar"]);
    ({ foo: 1, bar: 2 }).should.contain.keys(["bar"]);
    expect({ foo: 1, bar: 2 }).to.contain.keys(["bar", "foo"]);
    ({ foo: 1, bar: 2 }).should.contain.keys(["bar", "foo"]);

    expect({ foo: 1, bar: 2 }).to.not.have.keys("baz");
    ({ foo: 1, bar: 2 }).should.not.have.keys("baz");
    expect({ foo: 1, bar: 2 }).to.not.have.keys("foo", "baz");
    ({ foo: 1, bar: 2 }).should.not.have.keys("foo", "baz");
    expect({ foo: 1, bar: 2 }).to.not.contain.keys("baz");
    ({ foo: 1, bar: 2 }).should.not.contain.keys("baz");
    expect({ foo: 1, bar: 2 }).to.not.contain.keys("foo", "baz");
    ({ foo: 1, bar: 2 }).should.not.contain.keys("foo", "baz");
    expect({ foo: 1, bar: 2 }).to.not.contain.keys("baz", "foo");
    ({ foo: 1, bar: 2 }).should.not.contain.keys("baz", "foo");

    expect({ foo: 1 }).to.have.keys();
    ({ foo: 1 }).should.have.keys();

    expect({ foo: 1 }).to.have.keys([]);
    ({ foo: 1 }).should.have.keys([]);

    expect({ foo: 1 }).to.not.have.keys([]);
    ({ foo: 1 }).should.not.have.keys([]);

    expect({ foo: 1 }).to.contain.keys([]);
    ({ foo: 1 }).should.contain.keys([]);

    expect({ foo: 1 }).to.have.keys(["bar"]);
    ({ foo: 1 }).should.have.keys(["bar"]);

    expect({ foo: 1 }).to.have.keys(["bar", "baz"]);
    ({ foo: 1 }).should.have.keys(["bar", "baz"]);

    expect({ foo: 1 }).to.have.keys(["foo", "bar", "baz"]);
    ({ foo: 1 }).should.have.keys(["foo", "bar", "baz"]);

    expect({ foo: 1 }).to.not.have.keys(["foo"]);
    ({ foo: 1 }).should.not.have.keys(["foo"]);

    expect({ foo: 1 }).to.not.have.keys(["foo"]);
    ({ foo: 1 }).should.not.have.keys(["foo"]);

    expect({ foo: 1, bar: 2 }).to.not.have.keys(["foo", "bar"]);
    ({ foo: 1, bar: 2 }).should.not.have.keys(["foo", "bar"]);

    expect({ foo: 1 }).to.not.contain.keys(["foo"]);
    ({ foo: 1 }).should.not.contain.keys(["foo"]);

    expect({ foo: 1 }).to.contain.keys("foo", "bar");
    ({ foo: 1 }).should.contain.keys("foo", "bar");
}

function deepKeys() {
    expect(new Set([{ a: 1 }])).to.have.deep.keys([{ a: 1 }]);
    (new Set([{ a: 1 }])).should.have.deep.keys([{ a: 1 }]);

    expect(new Set([{ a: 1 }])).not.to.have.deep.keys([{ b: 1 }]);
    (new Set([{ a: 1 }])).should.not.have.deep.keys([{ b: 1 }]);
}

function chaining() {
    const tea = { name: "chai", extras: ["milk", "sugar", "smile"] };
    expect(tea).to.have.property("extras").with.lengthOf(3);
    tea.should.have.property("extras").with.lengthOf(3);

    expect(tea).to.have.property("extras").with.lengthOf(4);
    tea.should.have.property("extras").with.lengthOf(4);

    expect(tea).to.be.a("object").and.have.property("name", "chai");
    tea.should.be.a("object").and.have.property("name", "chai");

    expect({ b: 2 }).to.have.a.property("b");
    expect([1, 2, 3]).to.have.a.lengthOf(3);
}

function exxtensible() {
    expect({}).to.be.extensible;
    expect(Object.preventExtensions({})).to.be.not.extensible;
    ({}).should.be.extensible;
    Object.preventExtensions({}).should.not.be.extensible;
}

function sealed() {
    expect({}).to.be.not.sealed;
    expect(Object.seal({})).to.be.sealed;
    ({}).should.be.not.sealed;
    Object.seal({}).should.be.sealed;
}

function frozen() {
    expect({}).to.be.not.frozen;
    expect(Object.freeze({})).to.be.frozen;
    ({}).should.be.not.frozen;
    Object.freeze({}).should.be.frozen;

    expect([1, 2, 3]).to.have.all.members([1, 2, 3]);
    expect([1, 2, 3]).to.have.all.members(Object.freeze([1, 2, 3]));

    expect({ 1: "", 2: "", 3: "" }).to.have.all.keys([1, 2, 3]);
    expect({ 1: "", 2: "", 3: "" }).to.have.all.keys(Object.freeze([1, 2, 3]));

    assert.notDeepInclude([1, 2, 3], 1);
    assert.notDeepInclude(Object.freeze([1, 2, 3]), 1);

    assert.include([1, 2, 3], 1);
    assert.include(Object.freeze([1, 2, 3]), 1);

    assert.notInclude([1, 2, 3], 1);
    assert.notInclude(Object.freeze([1, 2, 3]), 1);

    expect([1, 2, 3]).to.have.oneOf([1, 2, 3]);
    expect([1, 2, 3]).to.have.oneOf(Object.freeze([1, 2, 3]));
}

class PoorlyConstructedError {
}

function _throw() {
    // See GH-45: some poorly-constructed custom errors don't have useful names
    // on either their constructor or their constructor prototype, but instead
    // only set the name inside the constructor itself.
    PoorlyConstructedError.prototype = Object.create(Error.prototype);

    const specificError = new RangeError("boo");

    const goodFn = () => {
    };
    const badFn = () => {
        throw new Error("testing");
    };
    const refErrFn = () => {
        throw new ReferenceError("hello");
    };
    const ickyErrFn = () => {
        throw new PoorlyConstructedError();
    };
    const specificErrFn = () => {
        throw specificError;
    };

    expect(goodFn).to.not.throw();
    goodFn.should.not.throw();
    should.not.throw(goodFn);
    expect(goodFn).to.not.throw(Error);
    goodFn.should.not.throw(Error);
    should.not.throw(goodFn, Error);
    expect(goodFn).to.not.throw(specificError);
    goodFn.should.not.throw(specificError);
    should.not.throw(goodFn, specificError);

    expect(badFn).to.throw();
    badFn.should.throw();
    should.throw(badFn);
    expect(badFn).to.throw(Error);
    badFn.should.throw(Error);
    should.throw(badFn, Error);
    expect(badFn).to.not.throw(ReferenceError);
    badFn.should.not.throw(ReferenceError);
    should.not.throw(badFn, ReferenceError);
    expect(badFn).to.not.throw(specificError);
    badFn.should.not.throw(specificError);
    should.not.throw(badFn, specificError);

    expect(refErrFn).to.throw();
    refErrFn.should.throw();
    should.throw(refErrFn);
    expect(refErrFn).to.throw(ReferenceError);
    refErrFn.should.throw(ReferenceError);
    should.throw(refErrFn, ReferenceError);
    expect(refErrFn).to.throw(Error);
    refErrFn.should.throw(Error);
    should.throw(refErrFn, Error);
    expect(refErrFn).to.not.throw(TypeError);
    refErrFn.should.not.throw(TypeError);
    should.not.throw(refErrFn, TypeError);
    expect(refErrFn).to.not.throw(specificError);
    refErrFn.should.not.throw(specificError);
    should.not.throw(refErrFn, specificError);

    expect(ickyErrFn).to.throw();
    ickyErrFn.should.throw();
    should.throw(ickyErrFn);
    expect(ickyErrFn).to.throw(PoorlyConstructedError);
    ickyErrFn.should.throw(PoorlyConstructedError);
    should.throw(ickyErrFn, PoorlyConstructedError);
    expect(ickyErrFn).to.throw(Error);
    ickyErrFn.should.throw(Error);
    should.throw(ickyErrFn, Error);
    expect(ickyErrFn).to.not.throw(specificError);
    ickyErrFn.should.not.throw(specificError);
    should.not.throw(ickyErrFn, specificError);
    expect(specificErrFn).to.throw(specificError);
    specificErrFn.should.throw(specificError);
    should.throw(ickyErrFn, specificError);

    expect(badFn).to.throw(/testing/);
    badFn.should.throw(/testing/);
    should.throw(badFn, /testing/);
    expect(badFn).to.not.throw(/hello/);
    badFn.should.not.throw(/hello/);
    should.not.throw(badFn, /hello/);
    expect(badFn).to.throw("testing");
    badFn.should.throw("testing");
    should.throw(badFn, "testing");
    expect(badFn).to.not.throw("hello");
    badFn.should.not.throw("hello");
    should.not.throw(badFn, "hello");

    expect(badFn).to.throw(Error, /testing/);
    badFn.should.throw(Error, /testing/);
    should.throw(badFn, Error, /testing/);
    expect(badFn).to.throw(Error, "testing");
    badFn.should.throw(Error, "testing");
    should.throw(badFn, Error, "testing");

    expect(goodFn).to.throw();
    goodFn.should.throw();
    should.throw(goodFn);

    expect(goodFn).to.throw(ReferenceError);
    goodFn.should.throw(ReferenceError);
    should.throw(goodFn, ReferenceError);

    expect(goodFn).to.throw(specificError);
    goodFn.should.throw(specificError);
    should.throw(goodFn, specificError);

    expect(badFn).to.not.throw();
    badFn.should.not.throw();
    should.not.throw(badFn);

    expect(badFn).to.throw(ReferenceError);
    badFn.should.throw(ReferenceError);
    should.throw(badFn, ReferenceError);

    expect(badFn).to.throw(specificError);
    badFn.should.throw(specificError);
    should.throw(badFn, specificError);

    expect(badFn).to.not.throw(Error);
    badFn.should.not.throw(Error);
    should.not.throw(badFn, Error);

    expect(refErrFn).to.not.throw(ReferenceError);
    refErrFn.should.not.throw(ReferenceError);
    should.not.throw(refErrFn, ReferenceError);

    expect(badFn).to.throw(PoorlyConstructedError);
    badFn.should.throw(PoorlyConstructedError);
    should.throw(badFn, PoorlyConstructedError);

    expect(ickyErrFn).to.not.throw(PoorlyConstructedError);
    ickyErrFn.should.not.throw(PoorlyConstructedError);
    should.not.throw(ickyErrFn, PoorlyConstructedError);

    expect(ickyErrFn).to.throw(ReferenceError);
    ickyErrFn.should.throw(ReferenceError);
    should.throw(ickyErrFn, ReferenceError);

    expect(specificErrFn).to.throw(new ReferenceError("eek"));
    specificErrFn.should.throw(new ReferenceError("eek"));
    should.throw(specificErrFn, new ReferenceError("eek"));

    expect(specificErrFn).to.not.throw(specificError);
    specificErrFn.should.not.throw(specificError);
    should.not.throw(specificErrFn, specificError);

    expect(badFn).to.not.throw(/testing/);
    badFn.should.not.throw(/testing/);
    should.not.throw(badFn, /testing/);

    expect(badFn).to.throw(/hello/);
    badFn.should.throw(/hello/);
    should.throw(badFn, /hello/);

    expect(badFn).to.throw(Error, /hello/, "blah");
    badFn.should.throw(Error, /hello/, "blah");
    should.throw(badFn, Error, /hello/, "blah");

    expect(badFn).to.throw(Error, "hello", "blah");
    badFn.should.throw(Error, "hello", "blah");
    should.throw(badFn, Error, "hello", "blah");
}

function testUse() {
    // Modified from:
    //   https://www.npmjs.com/package/chai-subset
    // But with added type annotations and some modifications to make the
    // linter whine less, and also a method (chai.assert.containSubset) removed
    // because we can't take advantage of namespace-declaration-merging here.
    function chaiSubset(chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
        const Assertion = chai.Assertion;
        const assertionPrototype = Assertion.prototype;

        Assertion.addMethod("containSubset", function(expected: Object) {
            const actual = utils.flag(this, "object");
            const showDiff = chai.config.showDiff;

            assertionPrototype.assert.call(
                this,
                compare(expected, actual),
                "expected #{act} to contain subset #{exp}",
                "expected #{act} to not contain subset #{exp}",
                expected,
                actual,
                showDiff,
            );
        });

        Assertion.addMethod("containSubset", function(expected: Object) {
            const actual = utils.flag(this, "object");
            const showDiff = chai.config.showDiff;

            assertionPrototype.assert.call(
                this,
                compare(expected, actual),
                "expected #{act} to contain subset #{exp}",
                "expected #{act} to not contain subset #{exp}",
                expected,
                actual,
                showDiff,
            );
        });

        Assertion.overwriteProperty("ok", function(_super: any) {
            return function checkModel(this: Chai.Assertion & Chai.AssertionStatic) {
                const obj = this._obj;
                if (obj && obj instanceof FakeArgs) {
                    const negate = utils.flag(this, "negate") as boolean;
                    if (negate && !("length" in obj)) {
                        return;
                    }
                    const assertLength = new Assertion(obj.length, "FakeArgs exists");
                    utils.transferFlags(this, assertLength, false);
                    assertLength.is.a("number");
                } else {
                    _super.call(this);
                }
            };
        });

        function compare(expected: Object, actual: Object): boolean {
            if (expected === actual) {
                return true;
            }
            if (typeof actual !== typeof expected) {
                return false;
            }
            if (typeof expected !== "object" || expected === null) {
                return expected === actual;
            }
            if (!!expected && !actual) {
                return false;
            }

            if (Array.isArray(expected) && Array.isArray(actual)) {
                if (typeof actual.length !== "number") {
                    return false;
                }
                const aa = Array.prototype.slice.call(actual);
                return expected.every((exp: Object) => aa.some((act: Object) => compare(exp, act)));
            }

            if (expected instanceof Date) {
                if (actual instanceof Date) {
                    return expected.getTime() === actual.getTime();
                } else {
                    return false;
                }
            }

            return Object.keys(expected).every((key: string): boolean => {
                const eo = (expected as { [key: string]: Object })[key];
                const ao = (actual as { [key: string]: Object })[key];
                if (typeof eo === "object" && eo !== null && ao !== null) {
                    return compare(eo, ao);
                }
                if (typeof eo === "function") {
                    return eo(ao);
                }
                return ao === eo;
            });
        }
    }

    function testAssertionPrototypeArgs(chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
        const Assertion = chai.Assertion;

        Assertion.addMethod("testAssertion", function(expected: Object) {
            this.assert(
                true,
                "expected message",
                "negated expected message",
                // 4th and subsequent args are optional
            );
        });
    }

    use(chaiSubset);
}

class Klass {
    val: number;

    constructor() {
        this.val = 0;
    }

    bar() {
    }

    static baz() {
    }
}

function respondTo() {
    const obj = new Klass();

    expect(Klass).to.respondTo("bar");
    expect(obj).respondsTo("bar");
    Klass.should.respondTo("bar");
    Klass.should.respondsTo("bar");
    expect(Klass).to.not.respondTo("foo");
    Klass.should.not.respondTo("foo");
    expect(Klass).itself.to.respondTo("func");
    expect(Klass).itself.not.to.respondTo("bar");

    expect(obj).not.to.respondTo("foo");
    obj.should.not.respondTo("foo");

    expect(Klass).to.respondTo("baz", "constructor");
    Klass.should.respondTo("baz", "constructor");

    expect(obj).to.respondTo("baz", "object");
    obj.should.respondTo("baz", "object");
}

function satisfy() {
    function matcher(num: number) {
        return num === 1;
    }

    expect(1).to.satisfy(matcher);
    (1).should.satisfy(matcher);

    expect(2).to.satisfy(matcher, "blah");
    (2).should.satisfy(matcher, "blah");
}

function closeTo() {
    expect(1.5).to.be.closeTo(1.0, 0.5);
    (1.5).should.be.closeTo(1.0, 0.5);
    expect(10).to.be.closeTo(20, 20);
    (10).should.be.closeTo(20, 20);
    expect(-10).to.be.closeTo(20, 30);
    (-10).should.be.closeTo(20, 30);

    expect(2).to.be.closeTo(1.0, 0.5, "blah");
    (2).should.be.closeTo(1.0, 0.5, "blah");

    expect(-10).to.be.closeTo(20, 29, "blah");
    (-10).should.be.closeTo(20, 29, "blah");
}

function approximately() {
    expect(1.5).to.be.approximately(1.0, 0.5);
    (1.5).should.be.approximately(1.0, 0.5);
    expect(10).to.be.approximately(20, 20);
    (10).should.be.approximately(20, 20);
    expect(-10).to.be.approximately(20, 30);
    (-10).should.be.approximately(20, 30);

    expect(2).to.be.approximately(1.0, 0.5, "blah");
    (2).should.be.approximately(1.0, 0.5, "blah");

    expect(-10).to.be.approximately(20, 29, "blah");
    (-10).should.be.approximately(20, 29, "blah");
}

function includeMembers() {
    expect([1, 2, 3]).to.include.members([]);
    [1, 2, 3].should.include.members([]);

    expect([1, 2, 3]).to.include.members([3, 2]);

    [1, 2, 3].should.include.members([3, 2]);

    expect([1, 2, 3]).to.not.include.members([8, 4]);

    [1, 2, 3].should.not.include.members([8, 4]);

    expect([1, 2, 3]).to.not.include.members([1, 2, 3, 4]);

    [1, 2, 3].should.not.include.members([1, 2, 3, 4]);
}

function sameMembers() {
    expect([5, 4]).to.have.same.members([4, 5]);
    [5, 4].should.have.same.members([4, 5]);
    expect([5, 4]).to.have.same.members([5, 4]);
    [5, 4].should.have.same.members([5, 4]);

    expect([5, 4]).to.not.have.same.members([]);
    [5, 4].should.not.have.same.members([]);
    expect([5, 4]).to.not.have.same.members([6, 3]);
    [5, 4].should.not.have.same.members([6, 3]);
    expect([5, 4]).to.not.have.same.members([5, 4, 2]);
    [5, 4].should.not.have.same.members([5, 4, 2]);

    assert.sameMembers([5, 4], [4, 5]);
}

function sameDeepMembers() {
    expect([{ id: 5 }, { id: 4 }]).to.have.same.deep.members([{ id: 4 }, { id: 5 }]);
    [{ id: 5 }, { id: 4 }].should.have.same.deep.members([{ id: 4 }, { id: 5 }]);
    expect([{ id: 5 }, { id: 4 }]).to.have.same.members([{ id: 5 }, { id: 4 }]);
    [{ id: 5 }, { id: 4 }].should.have.same.members([{ id: 5 }, { id: 4 }]);

    expect([{ id: 5 }, { id: 4 }]).to.not.have.same.members([]);
    [{ id: 5 }, { id: 4 }].should.not.have.same.members([]);
    expect([{ id: 5 }, { id: 4 }]).to.not.have.same.members([{ id: 6 }, { id: 3 }]);
    [{ id: 5 }, { id: 4 }].should.not.have.same.members([{ id: 6 }, { id: 3 }]);
    expect([{ id: 5 }, { id: 4 }]).to.not.have.same.members([{ id: 5 }, { id: 4 }, { id: 2 }]);
    [{ id: 5 }, { id: 4 }].should.not.have.same.members([{ id: 5 }, { id: 4 }, { id: 2 }]);

    assert.sameDeepMembers([{ id: 5 }, { id: 4 }], [{ id: 4 }, { id: 5 }]);
}

function orderedMembers() {
    expect([1, 2]).to.have.ordered.members([1, 2]).but.not.have.ordered.members([2, 1]);
    expect([1, 2, 3]).to.include.ordered.members([1, 2]).but.not.include.ordered.members([2, 3]);
    expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
    expect([1, 2, 3]).to.have.members([2, 1, 3]).but.not.ordered.members([2, 1, 3]);
    expect([{ a: 1 }, { b: 2 }, { c: 3 }]).to.include.deep.ordered.members([{ a: 1 }, { b: 2 }]).but.not.include.deep
        .ordered.members([{ b: 2 }, { c: 3 }]);

    assert.sameOrderedMembers([1, 2, 3], [1, 2, 3], "same ordered members");
    assert.notSameOrderedMembers([1, 2, 3], [2, 1, 3], "not same ordered members");
    assert.sameDeepOrderedMembers(
        [{ a: 1 }, { b: 2 }, { c: 3 }],
        [{ a: 1 }, { b: 2 }, { c: 3 }],
        "same deep ordered members",
    );
    assert.notSameDeepOrderedMembers(
        [{ a: 1 }, { b: 2 }, { c: 3 }],
        [{ b: 2 }, { a: 1 }, { c: 3 }],
        "not same deep ordered members",
    );

    assert.includeOrderedMembers([1, 2, 3], [1, 2], "include ordered members");
    assert.notIncludeOrderedMembers([1, 2, 3], [2, 1], "not include ordered members");
    assert.includeDeepOrderedMembers(
        [{ a: 1 }, { b: 2 }, { c: 3 }],
        [{ a: 1 }, { b: 2 }],
        "include deep ordered members",
    );
    assert.notIncludeDeepOrderedMembers(
        [{ a: 1 }, { b: 2 }, { c: 3 }],
        [{ b: 2 }, { c: 3 }],
        "not include deep ordered members",
    );
}

function members() {
    expect([5, 4]).members([4, 5]);
    expect([5, 4]).members([5, 4]);

    expect([5, 4]).not.members([]);
    expect([5, 4]).not.members([6, 3]);
    expect([5, 4]).not.members([5, 4, 2]);

    expect([5, 4]).to.have.all.members([4, 5]);
}

function increaseDecreaseChange() {
    const obj = { val: 10 };
    const inc = () => {
        obj.val++;
    };
    const dec = () => {
        obj.val--;
    };
    const same = () => {
    };

    expect(inc).to.increase(obj, "val");
    expect(inc).increases(obj, "val");
    expect(inc).to.change(obj, "val");

    expect(dec).to.decrease(obj, "val");
    expect(dec).decreases(obj, "val");
    expect(dec).to.change(obj, "val");
    expect(dec).changes(obj, "val");

    expect(inc).to.not.decrease(obj, "val");
    expect(dec).to.not.increase(obj, "val");
    expect(same).to.not.increase(obj, "val");
    expect(same).to.not.decrease(obj, "val");
    expect(same).to.not.change(obj, "val");

    inc.should.increase(obj, "val");
    inc.should.change(obj, "val");

    dec.should.decrease(obj, "val");
    dec.should.change(obj, "val");

    inc.should.not.decrease(obj, "val");
    dec.should.not.increase(obj, "val");
    same.should.not.change(obj, "val");

    const myObj = { val: 1 };
    const addTwo = () => {
        myObj.val += 2;
    };
    expect(addTwo).to.increase(myObj, "val").by(2);
}

function oneOf() {
    const obj = { z: 3 };

    expect(5).to.be.oneOf([1, 5, 4]);
    expect("z").to.be.oneOf(["x", "y", "z"]);
    expect(obj).to.be.oneOf([obj]);

    expect(5).to.not.be.oneOf([1, -12, 4]);
    expect(5).to.not.be.oneOf([1, [5], 4]);
    expect("z").to.not.be.oneOf(["w", "x", "y"]);
    expect("z").to.not.be.oneOf(["x", "y", ["z"]]);
    expect(obj).to.not.be.oneOf([{ z: 3 }]);

    expect("Today is sunny").to.contain.oneOf(["sunny", "cloudy"]);
}

function deepOneOf() {
    expect({ z: 3 }).to.be.deep.oneOf([{ z: 3 }]);
    expect({ z: 3 }).to.deep.be.oneOf([{ z: 3 }]);

    expect({ z: 3 }).to.not.be.deep.oneOf([{ x: 1 }, { y: 2 }]);
    expect({ z: 3 }).to.not.deep.be.oneOf([{ x: 1 }, { y: 2 }]);
}

function testInspectType() {
    const x: string = util.inspect([1, 2, 3], false, 4, false);
    expect(x).to.be.equal("[ 1, 2, 3 ]");
}

// tdd
declare function suite(description: string, action: Function): void;

declare function test(description: string, action: Function): void;

interface FieldObj {
    field: any;
}

class CrashyObject {
    inspect(): void {
        throw new Error("Arg's inspect() called even though the test passed");
    }
}

declare function foobar<T>(): T;

suite("assert", () => {
    test("assert", () => {
        const foo = "bar" as string;
        assert(foo === "bar", "expected foo to equal `bar`");

        function assertTypeNever(_: never) {}
        if (foo !== "bar") {
            assertTypeNever(foo);
        }
    });

    test("isTrue", () => {
        assert.isTrue(true);
        assert.isTrue(false);
        assert.isTrue(1);
        assert.isTrue("test");
    });

    test("ok", () => {
        assert.ok(true);
        assert.ok(1);
        assert.ok("test");
        assert.isOk(true);
        assert.isOk(1);
        assert.isOk("test");
        assert.ok(false);
        assert.ok(0);
        assert.ok("");
    });

    test("notOk", () => {
        assert.notOk(false);
        assert.notOk(0);
        assert.notOk("");
        assert.isNotOk(false);
        assert.isNotOk(0);
        assert.isNotOk("");
        assert.notOk(true);
        assert.notOk(1);
        assert.notOk("test");
    });

    test("isFalse", () => {
        assert.isFalse(false);
        assert.isFalse(true);
        assert.isFalse(0);
    });

    test("finite", () => {
        assert.isFinite(1);
    });

    test("equal", () => {
        assert.equal(void (0), undefined);
    });

    test("typeof / notTypeOf", () => {
        assert.typeOf("test", "string");
        assert.typeOf(true, "boolean");
        assert.typeOf(5, "number");
        assert.typeOf(5, "string");
    });

    test("notTypeOf", () => {
        assert.notTypeOf("test", "number");
        assert.notTypeOf(5, "number");
    });

    test("instanceOf", () => {
        assert.instanceOf(new Foo(), Foo);
        assert.instanceOf(5, Foo);
        assert.instanceOf(new CrashyObject(), CrashyObject);
    });

    test("notInstanceOf", () => {
        assert.notInstanceOf(new Foo(), String);
        assert.notInstanceOf(new Foo(), Foo);
    });

    test("isObject", () => {
        assert.isObject({});
        assert.isObject(new Foo());
        assert.isObject(true);
        assert.isObject(Foo);
        assert.isObject("foo");
    });

    test("isNotObject", () => {
        assert.isNotObject(5);
        assert.isNotObject({});
    });

    test("notEqual", () => {
        assert.notEqual(3, 4);
        assert.notEqual(5, 5);
    });

    test("strictEqual", () => {
        assert.strictEqual("foo", "foo");
    });

    test("notStrictEqual", () => {
        assert.notStrictEqual(5, 5);
    });

    test("deepEqual", () => {
        assert.deepEqual({ tea: "chai" }, { tea: "chai" });
        assert.deepEqual({ tea: "chai" }, { tea: "black" });

        const obja = Object.create({ tea: "chai" });
        const objb = Object.create({ tea: "chai" });

        assert.deepEqual(obja, objb);

        const obj1 = Object.create({ tea: "chai" });
        const obj2 = Object.create({ tea: "black" });

        assert.deepEqual(obj1, obj2);
    });

    test("deepEqual (ordering)", () => {
        const a = { a: "b", c: "d" };
        const b = { c: "d", a: "b" };
        assert.deepEqual(a, b);
    });

    test("deepEqual (circular)", () => {
        const circularObject: any = {};
        const secondCircularObject: any = {};
        circularObject.field = circularObject;
        secondCircularObject.field = secondCircularObject;

        assert.deepEqual(circularObject, secondCircularObject);

        secondCircularObject.field2 = secondCircularObject;
        assert.deepEqual(circularObject, secondCircularObject);
    });

    test("notDeepEqual", () => {
        assert.notDeepEqual({ tea: "jasmine" }, { tea: "chai" });
        assert.notDeepEqual({ tea: "chai" }, { tea: "chai" });
    });

    test("notDeepEqual (circular)", () => {
        const circularObject: any = {};
        const secondCircularObject: any = { tea: "jasmine" };
        circularObject.field = circularObject;
        secondCircularObject.field = secondCircularObject;

        assert.notDeepEqual(circularObject, secondCircularObject);

        delete secondCircularObject.tea;
        assert.notDeepEqual(circularObject, secondCircularObject);
    });

    test("deepStrictEqual", () => {
        assert.deepStrictEqual({ tea: "chai" }, { tea: "chai" });
        assert.throws(() => assert.deepStrictEqual({ tea: "chai" }, { tea: "black" }));

        const obja = Object.create({ tea: "chai" });
        const objb = Object.create({ tea: "chai" });

        assert.deepStrictEqual(obja, objb);

        const obj1 = Object.create({ tea: "chai" });
        const obj2 = Object.create({ tea: "black" });

        assert.throws(() => assert.deepStrictEqual(obj1, obj2));
    });

    test("deepStrictEqual (ordering)", () => {
        const a = { a: "b", c: "d" };
        const b = { c: "d", a: "b" };
        assert.deepStrictEqual(a, b);
    });

    test("deepStrictEqual (circular)", () => {
        const circularObject: any = {};
        const secondCircularObject: any = {};
        circularObject.field = circularObject;
        secondCircularObject.field = secondCircularObject;

        assert.deepStrictEqual(circularObject, secondCircularObject);

        secondCircularObject.field2 = secondCircularObject;
        assert.deepStrictEqual(circularObject, secondCircularObject);
    });

    test("isNull", () => {
        assert.isNull(null);
        assert.isNull(undefined);
    });

    test("isNotNull", () => {
        assert.isNotNull(undefined);
        assert.isNotNull(null);
    });

    test("isUndefined", () => {
        assert.isUndefined(undefined);
        assert.isUndefined(null);
    });

    test("isDefined", () => {
        assert.isDefined(null);
        assert.isDefined(undefined);
    });

    test("isNaN", () => {
        assert.isNaN(NaN);
        assert.isNaN(12);
    });

    test("isNotNaN", () => {
        assert.isNotNaN(12);
        assert.isNotNaN(NaN);
    });

    test("isFunction", () => {
        const func = () => {
        };
        assert.isFunction(func);
        assert.isFunction({});
    });

    test("isNotFunction", () => {
        assert.isNotFunction(5);
        assert.isNotFunction(() => {
        });
    });

    test("isArray", () => {
        assert.isArray([]);
        assert.isArray(new Array<any>());
        assert.isArray({});
    });

    test("isNotArray", () => {
        assert.isNotArray(3);
        assert.isNotArray([]);
        assert.isNotArray(new Array<any>());
    });

    test("isString", () => {
        assert.isString("Foo");
        // tslint:disable-next-line:no-construct
        assert.isString(new String("foo"));
        assert.isString(1);
    });

    test("isNotString", () => {
        assert.isNotString(3);
        assert.isNotString(["hello"]);
        assert.isNotString("hello");
    });

    test("isNumber", () => {
        assert.isNumber(1);
        assert.isNumber(Number("3"));
        assert.isNumber("1");
    });

    test("isNotNumber", () => {
        assert.isNotNumber("hello");
        assert.isNotNumber([5]);
        assert.isNotNumber(4);
    });

    test("isBoolean", () => {
        assert.isBoolean(true);
        assert.isBoolean(false);
        assert.isBoolean("1");
    });

    test("isNotBoolean", () => {
        assert.isNotBoolean("true");
        assert.isNotBoolean(true);
        assert.isNotBoolean(false);
    });

    test("include", () => {
        assert.include("foobar", "bar");
        assert.include([1, 2, 3], 3);
        assert.include({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 });
        assert.include(new Set([1, 2]), 2);
        assert.include(new Map([["a", 1], ["b", 2]]), 2);

        const a = {};
        assert.include(new WeakSet([{}, a]), a);
    });

    test("notInclude", () => {
        assert.notInclude("foobar", "baz");
        assert.notInclude([1, 2, 3], 4);
        assert.notInclude({ a: 1, b: 2, c: 3 }, { a: 6, b: 2 });
        assert.notInclude(new Set([1, 2]), 8);
        assert.notInclude(new WeakSet([{}, {}]), {});
        assert.notInclude(new Map([["a", 1], ["b", 2]]), 8);
    });

    test("deepInclude", () => {
        assert.deepInclude("foobar", "bar");
        assert.deepInclude([1, { a: 1 }, 3], { a: 1 });
        assert.deepInclude({ a: 1, b: { d: 4 }, c: 3 }, { a: 1, b: { d: 4 } });
        assert.deepInclude(new Set([{ a: 1 }, { a: 2 }]), { a: 2 });
        // deep include does not support ('cause)[https://github.com/chaijs/chai/blob/7ff12731428ab5d12f1e77e32d6a8d3eb967d082/lib/chai/core/assertions.js#L492]
        // assert.deepInclude(new WeakSet([ {}, {} ]), {});
        assert.deepInclude(new Map([["a", { a: 1 }], ["b", { a: 2 }]]), { a: 1 });
    });

    test("notDeepInclude", () => {
        assert.notDeepInclude("foobar", "baz");
        assert.notDeepInclude([1, { a: 1 }, 3], { a: 3 });
        assert.notDeepInclude({ a: 1, b: { d: 4 }, c: 3 }, { a: 1, b: { d: 6 } });
        assert.notDeepInclude(new Set([{ a: 1 }, { a: 2 }]), { a: 3 });
        // deep include does not support ('cause)[https://github.com/chaijs/chai/blob/7ff12731428ab5d12f1e77e32d6a8d3eb967d082/lib/chai/core/assertions.js#L492]
        // assert.notDeepInclude(new WeakSet([ {}, {} ]), {});
        assert.notDeepInclude(new Map([["a", { a: 1 }], ["b", { a: 2 }]]), { a: 8 });
    });

    test("nestedInclude", () => {
        assert.nestedInclude({ ".a": { b: "x" } }, { "\\.a.[b]": "x" });
        assert.nestedInclude({ a: { "[b]": "x" } }, { "a.\\[b\\]": "x" });
    });

    test("notNestedInclude", () => {
        assert.notNestedInclude({ ".a": { b: "x" } }, { "\\.a.b": "y" });
        assert.notNestedInclude({ a: { "[b]": "x" } }, { "a.\\[b\\]": "y" });
    });

    test("deepNestedInclude", () => {
        assert.deepNestedInclude({ a: { b: [{ x: 1 }] } }, { "a.b[0]": { x: 1 } });
        assert.deepNestedInclude({ ".a": { "[b]": { x: 1 } } }, { "\\.a.\\[b\\]": { x: 1 } });
    });

    test("notDeepNestedInclude", () => {
        assert.notDeepNestedInclude({ a: { b: [{ x: 1 }] } }, { "a.b[0]": { y: 1 } });
        assert.notDeepNestedInclude({ ".a": { "[b]": { x: 1 } } }, { "\\.a.\\[b\\]": { y: 2 } });
    });

    test("ownInclude", () => {
        assert.ownInclude({ a: 1 }, { a: 1 });
    });

    test("notOwnInclude", () => {
        assert.notOwnInclude({ a: 1 }, { a: 1 });
    });

    test("deepOwnInclude", () => {
        assert.deepOwnInclude({ a: { b: 2 } }, { a: { b: 2 } });
    });

    test("notDeepOwnInclude", () => {
        assert.notDeepOwnInclude({ a: { b: 2 } }, { a: { c: 3 } });
    });

    test("lengthOf", () => {
        assert.lengthOf([1, 2, 3], 3);
        assert.lengthOf("foobar", 6);
        assert.lengthOf("foobar", 5);
        assert.lengthOf({ length: 1 }, 5);
        assert.lengthOf(new Set([1, 2, 3]), 3);
        assert.lengthOf(new Map([["a", 1], ["b", 2], ["c", 3]]), 3);
    });

    test("match", () => {
        assert.match("foobar", /^foo/);
        assert.notMatch("foobar", /^bar/);
        assert.match("foobar", /^bar/i);
        assert.notMatch("foobar", /^foo/i);
    });

    test("property", () => {
        const obj = { foo: { bar: "baz" } };
        const simpleObj = { foo: "bar" } as any;
        assert.property(obj, "foo");
        assert.deepProperty(obj, "foo.bar");
        assert.notDeepProperty(obj, "foo.baz");
        assert.deepPropertyVal(obj, "foo.bar", "baz");
        assert.notDeepPropertyVal(simpleObj, "foo.bar", "flow");
        assert.property(simpleObj, "baz");
        assert.deepProperty(obj, "foo.baz");
        assert.notProperty(obj, "foo");
        assert.notDeepProperty(obj, "foo.bar");
        assert.propertyVal(simpleObj, "foo", "ball");
        assert.deepPropertyVal(obj, "foo.bar", "ball");
        assert.notPropertyVal(simpleObj, "foo", "bar");
        assert.notDeepPropertyVal(simpleObj, "foo.bar", "baz");
    });

    test("throws", () => {
        const errorInstance = new ReferenceError("foo");
        const fn = () => {
            throw errorInstance;
        };

        assert.throws(fn);
        assert.throws(fn, "foo");
        assert.throws(fn, /foo/);
        assert.throws(fn, ReferenceError);
        assert.throws(fn, errorInstance);
        assert.throws(fn, ReferenceError, "foo");
        assert.throws(fn, errorInstance, "foo");
        assert.throws(fn, ReferenceError, /foo/);
        assert.throws(fn, errorInstance, /foo/);

        assert.throws(fn, null, null, "message");
        assert.throws(fn, "foo", null, "message");
        assert.throws(fn, /foo/, null, "message");
        assert.throws(fn, ReferenceError, null, "message");
        assert.throws(fn, errorInstance, null, "message");
        assert.throws(fn, ReferenceError, "foo", "message");
        assert.throws(fn, errorInstance, "foo", "message");
        assert.throws(fn, ReferenceError, /foo/, "message");
        assert.throws(fn, errorInstance, /foo/, "message");
    });

    test("doesNotThrow", () => {
        const errorInstance = new ReferenceError("foo");
        const fn = () => {
            throw new Error("bar");
        };

        assert.doesNotThrow(() => {});
        assert.doesNotThrow(fn, "foo");
        assert.doesNotThrow(fn, /foo/);
        assert.doesNotThrow(fn, ReferenceError);
        assert.doesNotThrow(fn, errorInstance);
        assert.doesNotThrow(fn, ReferenceError, "foo");
        assert.doesNotThrow(fn, errorInstance, "foo");
        assert.doesNotThrow(fn, ReferenceError, /foo/);
        assert.doesNotThrow(fn, errorInstance, /foo/);

        assert.doesNotThrow(fn, null, null, "message");
        assert.doesNotThrow(fn, "foo", null, "message");
        assert.doesNotThrow(fn, /foo/, null, "message");
        assert.doesNotThrow(fn, ReferenceError, null, "message");
        assert.doesNotThrow(fn, errorInstance, null, "message");
        assert.doesNotThrow(fn, ReferenceError, "foo", "message");
        assert.doesNotThrow(fn, errorInstance, "foo", "message");
        assert.doesNotThrow(fn, ReferenceError, /foo/, "message");
        assert.doesNotThrow(fn, errorInstance, /foo/, "message");
    });

    test("ifError", () => {
        assert.ifError(false);
        assert.ifError(null);
        assert.ifError(undefined);
        assert.ifError("foo");
    });

    test("operator", () => {
        assert.operator(1, "<", 2);
        assert.operator(2, ">", 1);
        assert.operator(1, "==", 1);
        assert.operator(1, "<=", 1);
        assert.operator(1, ">=", 1);
        assert.operator(1, "!=", 2);
        assert.operator(1, "!==", 2);
        assert.operator(2, "<", 1);
        assert.operator(1, ">", 2);
        assert.operator(1, "==", 2);
        assert.operator(2, "<=", 1);
        assert.operator(1, ">=", 2);
        assert.operator(1, "!=", 1);
        assert.operator(1, "!==", "1");
    });

    test("closeTo", () => {
        assert.closeTo(1.5, 1.0, 0.5);
        assert.closeTo(10, 20, 20);
        assert.closeTo(-10, 20, 30);
        assert.closeTo(2, 1.0, 0.5);
        assert.closeTo(-10, 20, 29);
    });

    test("approximately", () => {
        assert.approximately(1.5, 1.0, 0.5);
        assert.approximately(10, 20, 20);
        assert.approximately(-10, 20, 30);
        assert.approximately(2, 1.0, 0.5);
        assert.approximately(-10, 20, 29);
    });

    test("members", () => {
        assert.includeMembers([1, 2, 3], [2, 3]);
        assert.includeMembers([1, 2, 3], []);
        assert.includeMembers([1, 2, 3], [3]);
        assert.includeMembers([5, 6], [7, 8]);
        assert.includeMembers([5, 6], [5, 6, 0]);

        assert.notIncludeMembers([1, 2, 3], [5, 1], "not include members");
    });

    test("memberEquals", () => {
        assert.sameMembers([], []);
        assert.sameMembers([1, 2, 3], [3, 2, 1]);
        assert.sameMembers([4, 2], [4, 2]);
        assert.sameMembers([], [1, 2]);
        assert.sameMembers([1, 54], [6, 1, 54]);
    });

    test("isAbove", () => {
        assert.isAbove(10, 5);
        assert.isAbove(1, 5);
        assert.isAbove(5, 5);
    });

    test("isBelow", () => {
        assert.isBelow(5, 10);
        assert.isBelow(5, 1);
        assert.isBelow(5, 5);
    });

    test("extensible", () => {
        assert.extensible({});
    });
    test("isExtensible", () => {
        assert.isExtensible({});
    });
    test("notExtensible", () => {
        assert.notExtensible(Object.preventExtensions({}));
    });
    test("isNotExtensible", () => {
        assert.isNotExtensible(Object.preventExtensions({}));
    });

    test("sealed", () => {
        assert.sealed(Object.seal({}));
    });
    test("isSealed", () => {
        assert.isSealed(Object.seal({}));
    });
    test("notSealed", () => {
        assert.notSealed({});
    });
    test("isNotSealed", () => {
        assert.isNotSealed({});
    });

    test("frozen", () => {
        assert.frozen(Object.freeze({}));
    });
    test("isFrozen", () => {
        assert.isFrozen(Object.freeze({}));
    });
    test("notFrozen", () => {
        assert.notFrozen({});
    });
    test("isNotFrozen", () => {
        assert.isNotFrozen({});
    });

    test("isNotTrue", () => {
        assert.isNotTrue(false);
        assert.isNotTrue(true);
    });

    test("isNotFalse", () => {
        assert.isNotFalse(true);
        assert.isNotFalse(false);
    });

    test("isAtLeast", () => {
        assert.isAtLeast(5, 3);
        assert.isAtLeast(5, 5);
        assert.isAtLeast(3, 5);
    });

    test("isAtMost", () => {
        assert.isAtMost(3, 5);
        assert.isAtMost(5, 5);
        assert.isAtMost(5, 3);
    });

    test("oneOf", () => {
        const obj = { z: 3 };

        assert.oneOf(5, [1, 5, 4]);
        assert.oneOf("z", ["x", "y", "z"]);
        assert.oneOf(obj, [obj]);
        assert.oneOf(5, [1, [5], 4]);
        assert.oneOf("z", ["w", "x", "y"]);
        assert.oneOf(obj, [{ z: 3 }]);
    });

    test("changes", () => {
        const obj = { z: 3 };

        assert.changes(
            () => {
            },
            obj,
            "z",
        );
        assert.changes(
            () => {
            },
            obj,
            "z",
            "message",
        );
    });

    test("changesBy", () => {
        const obj = { value: 10 };
        const fn = function() {
            obj.value += 5;
        };
        const getterFn = function() {
            return obj.value;
        };

        assert.changesBy(fn, obj, "value", 5);
        assert.changesBy(fn, getterFn, 5);
    });

    test("doesNotChange", () => {
        const obj = { z: 3 };

        assert.doesNotChange(
            () => {
            },
            obj,
            "z",
        );
        assert.doesNotChange(
            () => {
            },
            obj,
            "z",
            "message",
        );
    });

    test("increases", () => {
        const obj = { z: 3 };

        assert.increases(
            () => {
            },
            obj,
            "z",
        );
        assert.increases(
            () => {
            },
            obj,
            "z",
            "message",
        );
    });

    test("increasesBy", () => {
        const obj = { value: 10 };
        const incFn = function() {
            obj.value += 5;
        };
        const getterFn = function() {
            return obj.value;
        };

        assert.increasesBy(incFn, obj, "value", 5);
        assert.increasesBy(incFn, getterFn, 5);
    });

    test("doesNotIncrease", () => {
        const obj = { z: 3 };

        assert.doesNotIncrease(
            () => {
            },
            obj,
            "z",
        );
        assert.doesNotIncrease(
            () => {
            },
            obj,
            "z",
            "message",
        );
    });

    test("increasesButNotBy", () => {
        const obj = { value: 10 };
        const incFn = function() {
            obj.value += 5;
        };
        const getterFn = function() {
            return obj.value;
        };

        assert.increasesButNotBy(incFn, obj, "value", 1);
        assert.increasesButNotBy(incFn, getterFn, 1);
    });

    test("decreases", () => {
        const obj = { z: 3 };

        assert.decreases(
            () => {
            },
            obj,
            "z",
        );
        assert.decreases(
            () => {
            },
            obj,
            "z",
            "message",
        );
    });

    test("decreasesBy", () => {
        const obj = { value: 10 };
        const decFn = function() {
            obj.value -= 5;
        };
        const getterFn = function() {
            return obj.value;
        };

        assert.decreasesBy(decFn, obj, "value", 5);
        assert.decreasesBy(decFn, getterFn, 5);
    });

    test("doesNotDecrease", () => {
        const obj = { z: 3 };

        assert.doesNotDecrease(
            () => {
            },
            obj,
            "z",
        );
        assert.doesNotDecrease(
            () => {
            },
            obj,
            "z",
            "message",
        );
    });

    test("doesNotDecreaseBy", () => {
        const obj = { value: 10 };
        const decFn = function() {
            obj.value -= 5;
        };
        const getterFn = function() {
            return obj.value;
        };

        assert.doesNotDecreaseBy(decFn, obj, "val", 1);
        assert.doesNotDecreaseBy(decFn, getterFn, 1);
    });

    test("decreasesButNotBy", () => {
        const obj = { value: 10 };
        const decFn = function() {
            obj.value -= 5;
        };
        const getterFn = function() {
            return obj.value;
        };

        assert.decreasesButNotBy(decFn, obj, "val", 1);
        assert.decreasesButNotBy(decFn, getterFn, 1);
    });

    test("ifError", () => {
        const obj = { z: 3 };
        assert.ifError(obj);
        assert.ifError(obj, "message");
    });

    test("extensible", () => {
        const obj = { z: 3 };

        assert.extensible(obj);
        assert.extensible(obj, "message");
    });

    test("isNotExtensible", () => {
        const obj = { z: 3 };

        assert.isNotExtensible(obj);
        assert.isNotExtensible(obj, "message");
    });

    test("isSealed", () => {
        const obj = { z: 3 };

        assert.isSealed(obj);
        assert.isSealed(obj, "message");
    });

    test("sealed", () => {
        const obj = { z: 3 };

        assert.sealed(obj);
        assert.sealed(obj, "message");
    });

    test("isNotSealed", () => {
        const obj = { z: 3 };

        assert.isNotSealed(obj);
        assert.isNotSealed(obj, "message");
    });

    test("notSealed", () => {
        const obj = { z: 3 };

        assert.notSealed(obj);
        assert.notSealed(obj, "message");
    });

    test("isFrozen", () => {
        const obj = { z: 3 };

        assert.isFrozen(obj);
        assert.isFrozen(obj, "message");
    });

    test("frozen", () => {
        const obj = { z: 3 };

        assert.frozen(obj);
        assert.frozen(obj, "message");
    });

    test("isNotFrozen", () => {
        const obj = { z: 3 };

        assert.isNotFrozen(obj);
        assert.isNotFrozen(obj, "message");
    });

    test("notFrozen", () => {
        const obj = { z: 3 };

        assert.notFrozen(obj);
        assert.notFrozen(obj, "message");
    });

    test("hasAnyKeys", () => {
        assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "iDontExist", "baz"]);
        assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, iDontExist: 99, baz: 1337 });
        assert.hasAnyKeys(new Map<any, any>([[{ foo: 1 }, "bar"], ["key", "value"]]), [{ foo: 1 }, "key"]);
        assert.hasAnyKeys(new Set([{ foo: "bar" }, "anotherKey"]), [{ foo: "bar" }, "anotherKey"]);
    });

    test("hasAllKeys", () => {
        assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "bar", "baz"]);
        assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, bar: 99, baz: 1337 });
        assert.hasAllKeys(new Map<any, any>([[{ foo: 1 }, "bar"], ["key", "value"]]), [{ foo: 1 }, "key"]);
        assert.hasAllKeys(new Set([{ foo: "bar" }, "anotherKey"]), [{ foo: "bar" }, "anotherKey"]);
    });

    test("containsAllKeys", () => {
        assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "baz"]);
        assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ["foo", "bar", "baz"]);
        assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, baz: 1337 });
        assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, bar: 99, baz: 1337 });
        assert.containsAllKeys(new Map<any, any>([[{ foo: 1 }, "bar"], ["key", "value"]]), [{ foo: 1 }]);
        assert.containsAllKeys(new Map<any, any>([[{ foo: 1 }, "bar"], ["key", "value"]]), [{ foo: 1 }, "key"]);
        assert.containsAllKeys(new Set([{ foo: "bar" }, "anotherKey"]), [{ foo: "bar" }]);
        assert.containsAllKeys(new Set([{ foo: "bar" }, "anotherKey"]), [{ foo: "bar" }, "anotherKey"]);
    });

    test("doesNotHaveAnyKeys", () => {
        assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, ["one", "two", "example"]);
        assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, { one: 1, two: 2, example: "foo" });
        assert.doesNotHaveAnyKeys(new Map<any, any>([[{ foo: 1 }, "bar"], ["key", "value"]]), [
            { one: "two" },
            "example",
        ]);
        assert.doesNotHaveAnyKeys(new Set([{ foo: "bar" }, "anotherKey"]), [{ one: "two" }, "example"]);
    });

    test("doesNotHaveAllKeys", () => {
        assert.doesNotHaveAllKeys({ foo: 1, bar: 2, baz: 3 }, ["one", "two", "example"]);
        assert.doesNotHaveAllKeys({ foo: 1, bar: 2, baz: 3 }, { one: 1, two: 2, example: "foo" });
        assert.doesNotHaveAllKeys(new Map<any, any>([[{ foo: 1 }, "bar"], ["key", "value"]]), [
            { one: "two" },
            "example",
        ]);
        assert.doesNotHaveAllKeys(new Set([{ foo: "bar" }, "anotherKey"]), [{ one: "two" }, "example"]);
    });

    test("hasAnyDeepKeys", () => {
        assert.hasAnyDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [1, 2]]), { one: "one" });
        assert.hasAnyDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [1, 2]]), [{ one: "one" }, {
            two: "two",
        }]);
        assert.hasAnyDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [{ two: "two" }, "valueTwo"]]), [{
            one: "one",
        }, { two: "two" }]);
        assert.hasAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), { one: "one" });
        assert.hasAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [{ one: "one" }, { three: "three" }]);
        assert.hasAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [{ one: "one" }, { two: "two" }]);
    });

    test("hasAllDeepKeys", () => {
        assert.hasAllDeepKeys(new Map([[{ one: "one" }, "valueOne"]]), { one: "one" });
        assert.hasAllDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [{ two: "two" }, "valueTwo"]]), [{
            one: "one",
        }, { two: "two" }]);
        assert.hasAllDeepKeys(new Set([{ one: "one" }]), { one: "one" });
        assert.hasAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [{ one: "one" }, { two: "two" }]);
    });

    test("containsAllDeepKeys", () => {
        assert.containsAllDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [1, 2]]), { one: "one" });
        assert.containsAllDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [{ two: "two" }, "valueTwo"]]), [{
            one: "one",
        }, { two: "two" }]);
        assert.containsAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), { one: "one" });
        assert.containsAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [{ one: "one" }, { two: "two" }]);
    });

    test("doesNotHaveAnyDeepKeys", () => {
        assert.doesNotHaveAnyDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [1, 2]]), {
            thisDoesNot: "exist",
        });
        assert.doesNotHaveAnyDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [{ two: "two" }, "valueTwo"]]), [
            { twenty: "twenty" },
            { fifty: "fifty" },
        ]);
        assert.doesNotHaveAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), { twenty: "twenty" });
        assert.doesNotHaveAnyDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [{ twenty: "twenty" }, {
            fifty: "fifty",
        }]);
    });

    test("doesNotHaveAllDeepKeys", () => {
        assert.doesNotHaveAllDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [1, 2]]), {
            thisDoesNot: "exist",
        });
        assert.doesNotHaveAllDeepKeys(new Map<any, any>([[{ one: "one" }, "valueOne"], [{ two: "two" }, "valueTwo"]]), [
            { twenty: "twenty" },
            { one: "one" },
        ]);
        assert.doesNotHaveAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), { twenty: "twenty" });
        assert.doesNotHaveAllDeepKeys(new Set([{ one: "one" }, { two: "two" }]), [{ one: "one" }, { fifty: "fifty" }]);
    });

    test("nestedProperty", () => {
        assert.nestedProperty({ tea: { green: "matcha" } }, "tea.green");
        assert.nestedProperty({ tea: { green: "matcha" } }, "tea.green", "Should have tea.green nested property");
    });

    test("notNestedProperty", () => {
        assert.notNestedProperty({ tea: { green: "matcha" } }, "tea.oolong");
        assert.notNestedProperty(
            { tea: { green: "matcha" } },
            "tea.oolong",
            "Should not have tea.oolong nested property",
        );
    });

    test("nestedPropertyVal", () => {
        assert.nestedPropertyVal({ tea: { green: "matcha" } }, "tea.green", "matcha");
        assert.nestedPropertyVal(
            { tea: { green: "matcha" } },
            "tea.green",
            "matcha",
            "Should have tea.green nested property",
        );
    });

    test("notNestedPropertyVal", () => {
        assert.notNestedPropertyVal({ tea: { green: "matcha" } }, "tea.green", "konacha");
        assert.notNestedPropertyVal({ tea: { green: "matcha" } }, "coffee.green", "matcha");
        assert.notNestedPropertyVal(
            { tea: { green: "matcha" } },
            "tea.green",
            "konacha",
            "Should not have konacha as value",
        );
        assert.notNestedPropertyVal(
            { tea: { green: "matcha" } },
            "coffee.green",
            "matcha",
            "Should not have matcha as value",
        );
    });

    test("deepNestedPropertyVal", () => {
        assert.deepNestedPropertyVal({ tea: { green: { matcha: "yum" } } }, "tea.green", { matcha: "yum" });
        assert.deepNestedPropertyVal(
            { tea: { green: { matcha: "yum" } } },
            "tea.green",
            { matcha: "yum" },
            "Should have correct value of the property",
        );
    });

    test("notDeepNestedPropertyVal", () => {
        assert.notDeepNestedPropertyVal({ tea: { green: { matcha: "yum" } } }, "tea.green", { oolong: "yum" });
        assert.notDeepNestedPropertyVal({ tea: { green: { matcha: "yum" } } }, "tea.green", { matcha: "yuck" });
        assert.notDeepNestedPropertyVal({ tea: { green: { matcha: "yum" } } }, "tea.black", { matcha: "yum" });
        assert.notDeepNestedPropertyVal(
            { tea: { green: { matcha: "yum" } } },
            "tea.green",
            { oolong: "yum" },
            "Should have correct value of the property",
        );
        assert.notDeepNestedPropertyVal(
            { tea: { green: { matcha: "yum" } } },
            "tea.green",
            { matcha: "yuck" },
            "Should have correct value of the property",
        );
        assert.notDeepNestedPropertyVal(
            { tea: { green: { matcha: "yum" } } },
            "tea.black",
            { matcha: "yum" },
            "Should have correct value of the property",
        );
    });

    test("notIncludeDeepMembers", () => {
        assert.notIncludeDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }], "not include deep members");
    });
});

suite("narrowing", () => {
    test("assert", () => {
        const x = foobar<null | number>();
        assert(typeof x === "number");
        const y: number = x;
    });

    test("isOk", () => {
        const x = foobar<null | number>();
        assert.isOk(typeof x === "number");
        const y: number = x;
    });

    test("ok", () => {
        const x = foobar<null | number>();
        assert.ok(typeof x === "number");
        const y: number = x;
    });

    test("isTrue", () => {
        const x = foobar<true | number>();
        assert.isTrue(x);
        const y: true = x;
    });

    test("isFalse", () => {
        const x = foobar<false | number>();
        assert.isFalse(x);
        const y: false = x;
    });

    test("isNotTrue", () => {
        const x = foobar<true | number>();
        assert.isNotTrue(x);
        const y: number = x;
    });

    test("isNotFalse", () => {
        const x = foobar<false | number>();
        assert.isNotFalse(x);
        const y: number = x;
    });

    test("isNull", () => {
        const x = foobar<null | number>();
        assert.isNull(x);
        const y: null = x;
    });

    test("isNotNull", () => {
        const x = foobar<null | number>();
        assert.isNotNull(x);
        const y: number = x;
    });

    test("exists", () => {
        const x = foobar<null | undefined | number>();
        assert.exists(x);
        const y: number = x;
    });

    test("notExists", () => {
        const x = foobar<null | undefined | number>();
        assert.notExists(x);
        const y: null | undefined = x;
    });

    test("isUndefined", () => {
        const x = foobar<undefined | number>();
        assert.isUndefined(x);
        const y: undefined = x;
    });

    test("isDefined", () => {
        const x = foobar<undefined | number>();
        assert.isDefined(x);
        const y: number = x;
    });

    test("instanceOf", () => {
        const x = foobar<Foo | null>();
        assert.instanceOf(x, Foo);
        const y: Foo = x;
    });

    test("notInstanceOf", () => {
        const x = foobar<Foo | null>();
        assert.notInstanceOf(x, Foo);
        const y: null = x;
    });
});

function configuringDeepEqual() {
    config.deepEqual = (expected, actual) => {
        return util.eql(expected, actual, {
            comparator: (expected, actual) => {
                // for non number comparison, use the default behavior
                if (typeof expected !== "number") return null;
                // allow a difference of 10 between compared numbers
                return typeof actual === "number" && Math.abs(actual - expected) < 10;
            },
        });
    };
}
