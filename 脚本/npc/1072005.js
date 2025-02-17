/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


function start() {
    if (cm.haveItem(4031013,30)) {
        cm.sendNext("你收集了30个黑珠了？那好吧，你通过了我的测试，拿着#t4031012#去找汉斯吧！");
    } else {
		cm.gainItem(4031013,30);
        cm.sendOk("你需要收集 #b30个#t4031013##k。祝你好运！")
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(101020000, 0);
		cm.removeAll(4031013);
		cm.gainItem(4031009, -1);
		cm.gainItem(4031012,1);
	}
	cm.dispose();
}