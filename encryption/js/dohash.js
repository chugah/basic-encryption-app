function dohash(f,v) {
    f.pwd.value = genpass(v);
    f.md4.value = hex_md4(v);
    f.md5.value = hex_md5(v);
    f.sha1.value = hex_sha1(v);
    f.sha2.value = Sha256.hash(v);
    f.b64.value = Base64.encode(v);
}
