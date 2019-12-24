var _0x8c91 = ["use strict", "#app", "querySelector", "pages", "arr", "choose", "baseUrl", "/", "port", "location", "", "displayInstalledToast", "disabled", "platinum-sw-cache", "dom", "show", "#caching-complete", "dom-change", "Our app is ready to rock!", "log", "grid", "$", "items", "rowClassGenerator", "bip", "data", "addEventListener", "WebComponentsReady", "subtask", "n", "t", "r", "x", "k", "min", "max", "dialog", "initialize", "p", "subtask1", "subtask2", "subtask1_toggle", "subtask2_toggle", "subtask1_ans", "subtask2_ans", "lang", "stringify", "parse", "calculateDisabled", "resetTable", "pop", "length", "size", "scrollToEnd", "showTable", "push", "forEach", "reset", "state", "counter", "counter_reset", "counter_reset_start", "bip_counter", "pos", "convertState", "Main", "Menang", "Kalah", "calculatePages", "onCoba", "onUlangi", "open", "onPageChange", "onTap", "_", "item", "model", "button", "downAction", "ripple", "upAction", "async", "p.subtask1", "set", "p.subtask1_ans", "p.subtask2", "p.subtask2_ans", "alasan_kalah", "telah menekan sebanyak ", " kali", "terjadi hening sebanyak ", "onShowSubtask", "selected", "target", "observers", "displayCode(p.subtask1,p.subtask2,p.subtask1_toggle,p.subtask2_toggle,p.lang)", "displayCode", "map", "generatePas", "generateCpp", "innerHTML", "code", "display_code", "detail", "syntax-highlight", "fire", ", ", "join", "var\x0A", "  subtask1_l: longint = ", ";\x0A", "  subtask1: array[1..", "] of longint = (", ");\x0A", "  subtask2_l: longint = ", "  subtask2: array[1..", "  s: ansistring;\x0A", "  n, t, r: longint;\x0A", "  i: longint;\x0A", "\x0A", "begin\x0A", "  readln(s);\x0A", "  readln(n, t, r);\x0A", "  if s[2] = \'1\' then begin\x0A", "    for i:=1 to subtask1_l do begin\x0A", "      writeln(subtask1[i]);\x0A", "      flush(stdout);\x0A", "    end;\x0A", "  end;\x0A", "  if s[3] = \'2\' then begin\x0A", "    for i:=1 to subtask2_l do begin\x0A", "      writeln(subtask2[i]);\x0A", "end.\x0A", "#include <iostream>\x0A", "using namespace std;\x0A", "int subtask1_l = ", "int subtask1[", "] = {", "};\x0A", "int subtask2_l = ", "int subtask2[", "string s;\x0A", "int n, t, r;\x0A", "int main() {\x0A", "  getline(cin, s);\x0A", "  cin >> n >> t >> r;\x0A", "  if (s[1] == \'1\') {\x0A", "    for (int i=0; i<subtask1_l; i++) {\x0A", "      cout << subtask1[i] << endl << flush;\x0A", "    }\x0A", "  }\x0A", "  if (s[2] == \'2\') {\x0A", "    for (int i=0; i<subtask2_l; i++) {\x0A", "      cout << subtask2[i] << endl << flush;\x0A", "}\x0A"];
(function(_0xbb9cx1) {
    _0x8c91[0];
    var _0xbb9cx2 = 0;
    var _0xbb9cx3 = 1;
    var _0xbb9cx4 = 2;
    var _0xbb9cx5 = _0xbb9cx1[_0x8c91[2]](_0x8c91[1]);
    _0xbb9cx5[_0x8c91[3]] = 0;
    _0xbb9cx5[_0x8c91[4]] = [];
    _0xbb9cx5[_0x8c91[5]] = [];
    _0xbb9cx5[_0x8c91[6]] = _0x8c91[7];
    if (window[_0x8c91[9]][_0x8c91[8]] === _0x8c91[10]) {};
    _0xbb9cx5[_0x8c91[11]] = function() {
        if (!Polymer[_0x8c91[14]](_0xbb9cx1)[_0x8c91[2]](_0x8c91[13])[_0x8c91[12]]) {
            Polymer[_0x8c91[14]](_0xbb9cx1)[_0x8c91[2]](_0x8c91[16])[_0x8c91[15]]()
        }
    };
    _0xbb9cx5[_0x8c91[26]](_0x8c91[17], function() {
        console[_0x8c91[19]](_0x8c91[18]);
        var _0xbb9cx6 = _0xbb9cx5[_0x8c91[21]][_0x8c91[20]];
        _0xbb9cx6[_0x8c91[22]] = _0xbb9cx5[_0x8c91[5]];
        _0xbb9cx6[_0x8c91[23]] = function(_0xbb9cx7) {
            return _0xbb9cx7[_0x8c91[25]][_0x8c91[24]] ? _0x8c91[24] : _0x8c91[10]
        }
    });
    window[_0x8c91[26]](_0x8c91[27], function() {});
    _0xbb9cx5[_0x8c91[28]] = [{}, {}];
    _0xbb9cx5[_0x8c91[28]][0][_0x8c91[29]] = 5;
    _0xbb9cx5[_0x8c91[28]][0][_0x8c91[30]] = 30;
    _0xbb9cx5[_0x8c91[28]][0][_0x8c91[31]] = 0;
    _0xbb9cx5[_0x8c91[28]][0][_0x8c91[32]] = 5;
    _0xbb9cx5[_0x8c91[28]][0][_0x8c91[33]] = 1;
    _0xbb9cx5[_0x8c91[28]][1][_0x8c91[29]] = 6;
    _0xbb9cx5[_0x8c91[28]][1][_0x8c91[30]] = 42;
    _0xbb9cx5[_0x8c91[28]][1][_0x8c91[31]] = 1;
    _0xbb9cx5[_0x8c91[28]][1][_0x8c91[32]] = 2;
    _0xbb9cx5[_0x8c91[28]][1][_0x8c91[33]] = 4;
    _0xbb9cx5[_0x8c91[34]] = {};
    _0xbb9cx5[_0x8c91[34]][_0x8c91[29]] = 1;
    _0xbb9cx5[_0x8c91[34]][_0x8c91[30]] = 1;
    _0xbb9cx5[_0x8c91[34]][_0x8c91[31]] = 0;
    _0xbb9cx5[_0x8c91[34]][_0x8c91[32]] = 1;
    _0xbb9cx5[_0x8c91[34]][_0x8c91[33]] = 0;
    _0xbb9cx5[_0x8c91[35]] = {};
    _0xbb9cx5[_0x8c91[35]][_0x8c91[29]] = 36;
    _0xbb9cx5[_0x8c91[35]][_0x8c91[30]] = 2000;
    _0xbb9cx5[_0x8c91[35]][_0x8c91[31]] = 1;
    _0xbb9cx5[_0x8c91[35]][_0x8c91[32]] = 2000;
    _0xbb9cx5[_0x8c91[35]][_0x8c91[33]] = 2000;
    _0xbb9cx5[_0x8c91[36]] = {};
    _0xbb9cx5[_0x8c91[36]][_0x8c91[29]] = 4;
    _0xbb9cx5[_0x8c91[36]][_0x8c91[30]] = 20;
    _0xbb9cx5[_0x8c91[36]][_0x8c91[31]] = 0;
    _0xbb9cx5[_0x8c91[36]][_0x8c91[32]] = 3;
    _0xbb9cx5[_0x8c91[36]][_0x8c91[33]] = 2;
    _0xbb9cx5[_0x8c91[37]] = function(_0xbb9cx8) {
        _0xbb9cx5[_0x8c91[38]] = {};
        _0xbb9cx5[_0x8c91[38]][_0x8c91[39]] = false;
        _0xbb9cx5[_0x8c91[38]][_0x8c91[40]] = false;
        _0xbb9cx5[_0x8c91[38]][_0x8c91[41]] = false;
        _0xbb9cx5[_0x8c91[38]][_0x8c91[42]] = false;
        _0xbb9cx5[_0x8c91[38]][_0x8c91[43]] = [];
        _0xbb9cx5[_0x8c91[38]][_0x8c91[44]] = [];
        _0xbb9cx5[_0x8c91[38]][_0x8c91[45]] = 0
    };
    var _0xbb9cx9 = function(_0xbb9cxa) {
        return JSON[_0x8c91[47]](JSON[_0x8c91[46]](_0xbb9cxa))
    };
    _0xbb9cx5[_0x8c91[48]] = function(_0xbb9cxb, _0xbb9cxc) {
        return (_0xbb9cxb == 0 || _0xbb9cxc == 0) ? _0x8c91[12] : _0x8c91[10]
    };
    _0xbb9cx5[_0x8c91[49]] = function() {
        while (_0xbb9cx5[_0x8c91[5]][_0x8c91[51]] > 0) {
            _0xbb9cx5[_0x8c91[5]][_0x8c91[50]]()
        };
        _0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[52]] = _0xbb9cx5[_0x8c91[5]][_0x8c91[51]];
        if (_0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[52]] > 0) {
            _0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[53]]()
        }
    };
    _0xbb9cx5[_0x8c91[54]] = function(_0xbb9cxd) {
        _0xbb9cx5[_0x8c91[49]]();
        _0xbb9cxd[_0x8c91[56]](function(_0xbb9cxe) {
            _0xbb9cx5[_0x8c91[5]][_0x8c91[55]](_0xbb9cxe)
        });
        _0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[52]] = _0xbb9cx5[_0x8c91[5]][_0x8c91[51]];
        if (_0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[52]] > 0) {
            _0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[53]]()
        }
    };
    _0xbb9cx5[_0x8c91[57]] = function() {
        var _0xbb9cxf;
        if (_0xbb9cx5[_0x8c91[3]] == 2) {
            _0xbb9cxf = _0xbb9cx5[_0x8c91[36]]
        } else {
            if (_0xbb9cx5[_0x8c91[3]] == 0 || _0xbb9cx5[_0x8c91[3]] == 1) {
                _0xbb9cxf = _0xbb9cx5[_0x8c91[28]][_0xbb9cx5[_0x8c91[3]]]
            } else {
                return
            }
        };
        _0xbb9cx5[_0x8c91[29]] = parseInt(_0xbb9cxf[_0x8c91[29]]);
        _0xbb9cx5[_0x8c91[30]] = parseInt(_0xbb9cxf[_0x8c91[30]]);
        _0xbb9cx5[_0x8c91[31]] = parseInt(_0xbb9cxf[_0x8c91[31]]);
        _0xbb9cx5[_0x8c91[32]] = parseInt(_0xbb9cxf[_0x8c91[32]]);
        _0xbb9cx5[_0x8c91[33]] = parseInt(_0xbb9cxf[_0x8c91[33]]);
        while (_0xbb9cx5[_0x8c91[4]][_0x8c91[51]] > 0) {
            _0xbb9cx5[_0x8c91[50]](_0x8c91[4])
        };
        for (var _0xbb9cx10 = 0; _0xbb9cx10 < _0xbb9cx5[_0x8c91[29]]; _0xbb9cx10++) {
            _0xbb9cx5[_0x8c91[55]](_0x8c91[4], {
                _: _0xbb9cx10 + 1
            })
        };
        _0xbb9cx5[_0x8c91[58]] = _0xbb9cx2;
        _0xbb9cx5[_0x8c91[59]] = _0xbb9cx5[_0x8c91[30]];
        _0xbb9cx5[_0x8c91[60]] = 0;
        _0xbb9cx5[_0x8c91[61]] = false;
        _0xbb9cx5[_0x8c91[62]] = 0;
        _0xbb9cx5[_0x8c91[63]] = 0;
        _0xbb9cx5[_0x8c91[49]]()
    };
    _0xbb9cx5[_0x8c91[64]] = function(_0xbb9cx11) {
        if (_0xbb9cx11 == _0xbb9cx2) {
            return _0x8c91[65]
        } else {
            if (_0xbb9cx11 == _0xbb9cx3) {
                return _0x8c91[66]
            } else {
                if (_0xbb9cx11 == _0xbb9cx4) {
                    return _0x8c91[67]
                }
            }
        }
    };
    _0xbb9cx5[_0x8c91[68]] = function(_0xbb9cx12) {
        return (_0xbb9cx12 < 3) ? 0 : _0xbb9cx12 - 2
    };
    _0xbb9cx5[_0x8c91[69]] = function(_0xbb9cx8) {
        _0xbb9cx5[_0x8c91[57]]()
    };
    _0xbb9cx5[_0x8c91[70]] = function(_0xbb9cx8) {
        if (_0xbb9cx5[_0x8c91[3]] == 2) {
            _0xbb9cx5[_0x8c91[21]][_0x8c91[36]][_0x8c91[71]]()
        } else {
            if (_0xbb9cx5[_0x8c91[3]] == 0 || _0xbb9cx5[_0x8c91[3]] == 1) {
                _0xbb9cx5[_0x8c91[57]]()
            } else {
                if (_0xbb9cx5[_0x8c91[3]] == 3) {
                    _0xbb9cx5[_0x8c91[49]]()
                }
            }
        }
    };
    _0xbb9cx5[_0x8c91[72]] = function(_0xbb9cx8) {
        _0xbb9cx5[_0x8c91[70]]()
    };
    _0xbb9cx5[_0x8c91[73]] = function(_0xbb9cx8) {
        if (_0xbb9cx5[_0x8c91[58]] == _0xbb9cx2) {
            var _0xbb9cxc = false;
            var _0xbb9cx13 = _0xbb9cx5[_0x8c91[5]][_0x8c91[51]] - _0xbb9cx5[_0x8c91[33]];
            if (_0xbb9cx5[_0x8c91[33]] == 0) {
                _0xbb9cxc = _0xbb9cx8[_0x8c91[76]][_0x8c91[75]][_0x8c91[74]] === _0xbb9cx5[_0x8c91[32]]
            } else {
                if (_0xbb9cx13 >= 0) {
                    _0xbb9cxc = (_0xbb9cx5[_0x8c91[5]][_0xbb9cx13][_0x8c91[77]] === _0xbb9cx5[_0x8c91[32]])
                }
            };
            if (_0xbb9cxc) {
                _0xbb9cx5[_0x8c91[21]][_0x8c91[79]][_0x8c91[78]](_0xbb9cx8);
                _0xbb9cx5[_0x8c91[81]](function() {
                    _0xbb9cx5[_0x8c91[21]][_0x8c91[79]][_0x8c91[80]]()
                }, 1)
            };
            _0xbb9cx5[_0x8c91[5]][_0x8c91[55]]({
                index: ++_0xbb9cx5[_0x8c91[63]],
                button: _0xbb9cx8[_0x8c91[76]][_0x8c91[75]][_0x8c91[74]],
                bip: _0xbb9cxc
            });
            _0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[52]] = _0xbb9cx5[_0x8c91[5]][_0x8c91[51]];
            if (_0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[52]] > 0) {
                _0xbb9cx5[_0x8c91[21]][_0x8c91[20]][_0x8c91[53]]()
            };
            _0xbb9cx5[_0x8c91[59]]--;
            if (_0xbb9cxc) {
                _0xbb9cx5[_0x8c91[62]]++
            };
            if (_0xbb9cxc) {
                _0xbb9cx5[_0x8c91[61]] = true
            };
            if (_0xbb9cx5[_0x8c91[31]] == 1 && _0xbb9cx5[_0x8c91[61]]) {
                _0xbb9cx5[_0x8c91[60]]++;
                if (_0xbb9cxc) {
                    _0xbb9cx5[_0x8c91[60]] = 0
                }
            };
            if (_0xbb9cx5[_0x8c91[62]] == _0xbb9cx5[_0x8c91[29]]) {
                _0xbb9cx5[_0x8c91[58]] = _0xbb9cx3;
                if (_0xbb9cx5[_0x8c91[3]] == 0) {
                    _0xbb9cx5[_0x8c91[83]](_0x8c91[82], true);
                    _0xbb9cx5[_0x8c91[83]](_0x8c91[84], _0xbb9cx9(_0xbb9cx5[_0x8c91[5]]))
                } else {
                    if (_0xbb9cx5[_0x8c91[3]] == 1) {
                        _0xbb9cx5[_0x8c91[83]](_0x8c91[85], true);
                        _0xbb9cx5[_0x8c91[83]](_0x8c91[86], _0xbb9cx9(_0xbb9cx5[_0x8c91[5]]))
                    }
                }
            } else {
                if (_0xbb9cx5[_0x8c91[59]] == 0) {
                    _0xbb9cx5[_0x8c91[58]] = _0xbb9cx4;
                    _0xbb9cx5[_0x8c91[87]] = _0x8c91[88] + _0xbb9cx5[_0x8c91[30]] + _0x8c91[89]
                } else {
                    if (_0xbb9cx5[_0x8c91[31]] == 1 && _0xbb9cx5[_0x8c91[60]] == _0xbb9cx5[_0x8c91[29]]) {
                        _0xbb9cx5[_0x8c91[58]] = _0xbb9cx4;
                        _0xbb9cx5[_0x8c91[87]] = _0x8c91[90] + _0xbb9cx5[_0x8c91[29]] + _0x8c91[89]
                    }
                }
            }
        }
    };
    _0xbb9cx5[_0x8c91[91]] = function(_0xbb9cx8) {
        var _0xbb9cx14 = _0xbb9cx8[_0x8c91[93]][_0x8c91[92]];
        var _0xbb9cx15;
        if (_0xbb9cx14 == 0) {
            _0xbb9cx15 = _0xbb9cx5[_0x8c91[38]][_0x8c91[43]]
        } else {
            if (_0xbb9cx14 == 1) {
                _0xbb9cx15 = _0xbb9cx5[_0x8c91[38]][_0x8c91[44]]
            } else {
                return
            }
        };
        _0xbb9cx5[_0x8c91[54]](_0xbb9cx15)
    };
    _0xbb9cx5[_0x8c91[94]] = [_0x8c91[95]];
    _0xbb9cx5[_0x8c91[96]] = function(_0xbb9cx16, _0xbb9cx17, _0xbb9cx18, _0xbb9cx19, _0xbb9cx1a) {
        var _0xbb9cx1b = _0xbb9cx16 && _0xbb9cx18;
        var _0xbb9cx1c = _0xbb9cx17 && _0xbb9cx19;
        var _0xbb9cx1d = [];
        var _0xbb9cx1e = [];
        if (_0xbb9cx1b) {
            _0xbb9cx1d = _0xbb9cx5[_0x8c91[38]][_0x8c91[43]][_0x8c91[97]](function(_0xbb9cxe) {
                return _0xbb9cxe[_0x8c91[77]]
            })
        };
        if (_0xbb9cx1c) {
            _0xbb9cx1e = _0xbb9cx5[_0x8c91[38]][_0x8c91[44]][_0x8c91[97]](function(_0xbb9cxe) {
                return _0xbb9cxe[_0x8c91[77]]
            })
        };
        var _0xbb9cx1f = _0x8c91[10];
        if (_0xbb9cx1a == 0) {
            _0xbb9cx1f = _0xbb9cx5[_0x8c91[98]](_0xbb9cx1d, _0xbb9cx1e)
        };
        if (_0xbb9cx1a == 1) {
            _0xbb9cx1f = _0xbb9cx5[_0x8c91[99]](_0xbb9cx1d, _0xbb9cx1e)
        };
        _0xbb9cx5[_0x8c91[21]][_0x8c91[102]][_0x8c91[2]](_0x8c91[101])[_0x8c91[100]] = this[_0x8c91[105]](_0x8c91[104], {
            code: _0xbb9cx1f
        })[_0x8c91[103]][_0x8c91[101]]
    };
    _0xbb9cx5[_0x8c91[98]] = function(_0xbb9cx20, _0xbb9cx21) {
        var _0xbb9cx1d = _0xbb9cx20[_0x8c91[51]];
        var _0xbb9cx22 = _0xbb9cx20[_0x8c91[107]](_0x8c91[106]);
        var _0xbb9cx1e = _0xbb9cx21[_0x8c91[51]];
        var _0xbb9cx23 = _0xbb9cx21[_0x8c91[107]](_0x8c91[106]);
        var _0xbb9cx24 = _0x8c91[10];
        _0xbb9cx24 += _0x8c91[108];
        if (_0xbb9cx1d > 0) {
            _0xbb9cx24 += _0x8c91[109] + _0xbb9cx1d + _0x8c91[110] + _0x8c91[111] + _0xbb9cx1d + _0x8c91[112] + _0xbb9cx22 + _0x8c91[113]
        };
        if (_0xbb9cx1e > 0) {
            _0xbb9cx24 += _0x8c91[114] + _0xbb9cx1e + _0x8c91[110] + _0x8c91[115] + _0xbb9cx1e + _0x8c91[112] + _0xbb9cx23 + _0x8c91[113]
        };
        _0xbb9cx24 += _0x8c91[116] + _0x8c91[117] + _0x8c91[118] + _0x8c91[119] + _0x8c91[120] + _0x8c91[121] + _0x8c91[122];
        if (_0xbb9cx1d > 0) {
            _0xbb9cx24 += _0x8c91[119] + _0x8c91[123] + _0x8c91[124] + _0x8c91[125] + _0x8c91[126] + _0x8c91[127] + _0x8c91[128]
        };
        if (_0xbb9cx1e > 0) {
            _0xbb9cx24 += _0x8c91[119] + _0x8c91[129] + _0x8c91[130] + _0x8c91[131] + _0x8c91[126] + _0x8c91[127] + _0x8c91[128]
        };
        _0xbb9cx24 += _0x8c91[132];
        return _0xbb9cx24
    };
    _0xbb9cx5[_0x8c91[99]] = function(_0xbb9cx20, _0xbb9cx21) {
        var _0xbb9cx1d = _0xbb9cx20[_0x8c91[51]];
        var _0xbb9cx22 = _0xbb9cx20[_0x8c91[107]](_0x8c91[106]);
        var _0xbb9cx1e = _0xbb9cx21[_0x8c91[51]];
        var _0xbb9cx23 = _0xbb9cx21[_0x8c91[107]](_0x8c91[106]);
        var _0xbb9cx24 = _0x8c91[10];
        _0xbb9cx24 += _0x8c91[133] + _0x8c91[119] + _0x8c91[134] + _0x8c91[119];
        if (_0xbb9cx1d > 0) {
            _0xbb9cx24 += _0x8c91[135] + _0xbb9cx1d + _0x8c91[110] + _0x8c91[136] + _0xbb9cx1d + _0x8c91[137] + _0xbb9cx22 + _0x8c91[138]
        };
        if (_0xbb9cx1e > 0) {
            _0xbb9cx24 += _0x8c91[139] + _0xbb9cx1e + _0x8c91[110] + _0x8c91[140] + _0xbb9cx1e + _0x8c91[137] + _0xbb9cx23 + _0x8c91[138]
        };
        _0xbb9cx24 += _0x8c91[141] + _0x8c91[142] + _0x8c91[119] + _0x8c91[143] + _0x8c91[144] + _0x8c91[145];
        if (_0xbb9cx1d > 0) {
            _0xbb9cx24 += _0x8c91[119] + _0x8c91[146] + _0x8c91[147] + _0x8c91[148] + _0x8c91[149] + _0x8c91[150]
        };
        if (_0xbb9cx1e > 0) {
            _0xbb9cx24 += _0x8c91[119] + _0x8c91[151] + _0x8c91[152] + _0x8c91[153] + _0x8c91[149] + _0x8c91[150]
        };
        _0xbb9cx24 += _0x8c91[154];
        return _0xbb9cx24
    }
})(document)