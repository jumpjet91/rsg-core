exports('ShowAdvancedLeftNotification', (title, subTitle, dict, icon, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true);

	const string1 = CreateVarString(10, "LITERAL_STRING", title);
	const string2 = CreateVarString(10, "LITERAL_STRING", subTitle);
	const struct2 = new DataView(new ArrayBuffer(56));
	struct2.setBigInt64(8, BigInt(string1), true);
	struct2.setBigInt64(16, BigInt(string2), true);
	struct2.setBigInt64(32, BigInt(GetHashKey(dict)), true);
	struct2.setBigInt64(40, BigInt(GetHashKey(icon)), true);
	struct2.setBigInt64(48, BigInt(GetHashKey("COLOR_WHITE")), true);

	Citizen.invokeNative("0x26E87218390E6729", struct1, struct2, 1, 1);
});

exports('ShowLocationNotification', (text, location, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true);

	const string = CreateVarString(10, "LITERAL_STRING", location);
	const string2 = CreateVarString(10, "LITERAL_STRING", text);
	const struct2 = new DataView(new ArrayBuffer(24));
	struct2.setBigInt64(8, BigInt(string), true);
	struct2.setBigInt64(16, BigInt(string2), true);

	Citizen.invokeNative("0xD05590C1AB38F068", struct1, struct2, 1, 1);
});

exports('ShowTooltip', (text, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setUint32(0, duration, true);

	const str = CreateVarString(10, "LITERAL_STRING", text);
	const struct2 = new DataView(new ArrayBuffer(16));
	struct2.setBigUint64(8, BigInt(str), true);

	Citizen.invokeNative("0x049D5C615BD38BAD", struct1, struct2, 1);
});

exports('DisplayRightText', (text, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true); // duration

	const string = CreateVarString(10, "LITERAL_STRING", text);
	const struct2 = new DataView(new ArrayBuffer(16));
	struct2.setBigInt64(8, BigInt(string), true);

	Citizen.invokeNative("0xB2920B9760F0F36B", struct1, struct2, 1);
});

exports('ShowObjective', (text, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true); // duration

	const string = CreateVarString(10, "LITERAL_STRING", text);
	const struct2 = new DataView(new ArrayBuffer(16));
	struct2.setBigInt64(8, BigInt(string), true);

	Citizen.invokeNative("0xCEDBF17EFCC0E4A4", struct1, struct2, 1);
});

exports('ShowTopNotification', (title, subtext, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true); // duration

	const string = CreateVarString(10, "LITERAL_STRING", title);
	const string2 = CreateVarString(10, "LITERAL_STRING", subtext);
	const struct2 = new DataView(new ArrayBuffer(48));
	struct2.setBigInt64(8, BigInt(string), true);
	struct2.setBigInt64(16, BigInt(string2), true);

	Citizen.invokeNative("0xA6F4216AB10EB08E", struct1, struct2, 1, 1);
});

exports('ShowAdvancedRightNotification', (text, dict, icon, text_color, duration) => {
	const _text = CreateVarString(10, "LITERAL_STRING", text);
	const _dict = CreateVarString(10, "LITERAL_STRING", dict);
	const sdict = CreateVarString(10, "LITERAL_STRING", "Transaction_Feed_Sounds");
	const sound = CreateVarString(10, "LITERAL_STRING", "Transaction_Positive");
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true);
	struct1.setBigInt64(8, BigInt(sdict), true);
	struct1.setBigInt64(16, BigInt(sound), true);
	const struct2 = new DataView(new ArrayBuffer(76));
	struct2.setBigInt64(8, BigInt(_text), true);
	struct2.setBigInt64(16, BigInt(_dict), true);
	struct2.setBigInt64(24, BigInt(GetHashKey(icon)), true);
	struct2.setBigInt64(40, BigInt(GetHashKey(text_color)), true);
	struct2.setInt32(48, 0, true); // quality stars or something works without icon
	Citizen.invokeNative("0xB249EBCB30DD88E0", struct1, struct2, 1);
});

exports('ShowBasicTopNotification', (text, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true); // duration

	const string = CreateVarString(10, "LITERAL_STRING", text);
	const struct2 = new DataView(new ArrayBuffer(48));
	struct2.setBigInt64(8, BigInt(string), true);

	Citizen.invokeNative("0x860DDFE97CC94DF0", struct1, struct2, 1);
});

exports('ShowSimpleCenterText', (text, duration) => {
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true); // duration

	const string = CreateVarString(10, "LITERAL_STRING", text);
	const struct2 = new DataView(new ArrayBuffer(24));
	struct2.setBigInt64(8, BigInt(string), true);
	struct2.setBigInt64(16, BigInt(GetHashKey("COLOR_PURE_WHITE")), true);

	Citizen.invokeNative("0x893128CDB4B81FBB", struct1, struct2, 1);
});

/*mrfurquim request https://github.com/Rexshack-RedM/rsg-core/pull/21#issuecomment-1571186546*/
exports('showBottomRight', (text, duration) =>{
	const struct1 = new DataView(new ArrayBuffer(48));
	struct1.setInt32(0, duration, true); // duration

	const string1 = CreateVarString(10, "LITERAL_STRING", text);
	const struct2 = new DataView (new ArrayBuffer(8 * 5));
	struct2.setBigInt64(8, BigInt(string1), true);
	Citizen.InvokeNative("0x2024F4F333095FB1", struct1, struct2, 1);
});

exports('howFailMissionNotif', (title, subTitle, duration) => {
	const titleString = CreateVarString(10, "LITERAL_STRING", title);
	const msgString = CreateVarString(10, "LITERAL_STRING", subTitle);

	const struct1 = new DataView(new ArrayBuffer(8 * 5));
	struct1.setInt32(0, duration, true);

	const struct2 = new DataView(new ArrayBuffer(8 * 9));
	struct2.setBigInt64(8 * 1, BigInt(titleString), true);
	struct2.setBigInt64(8 * 2, BigInt(msgString), true);

	const zz = Citizen.InvokeNative("0x9F2CC2439A04E7BA", struct1, struct2, 1);
	Citizen.InvokeNative("0x00A15B94CBA4F76F", zz);
});

exports('showDeathNotif', (title, _audioRef, _audioName, duration) => {
	const titleString = CreateVarString(10, "LITERAL_STRING", title);
	const audioStringRef = CreateVarString(10, "LITERAL_STRING", _audioRef);
	const audioNameString = CreateVarString(10, "LITERAL_STRING", _audioName);
	const struct1 = new DataView(new ArrayBuffer(8 * 5));
	struct1.setInt32(0, duration, true);
	struct1.setBigInt64(8 * 0, BigInt(audioStringRef), true);
	struct1.setBigInt64(8 * 1, BigInt(audioNameString), true);
	struct1.setBigInt64(8 * 2, BigInt(4), true);
	const struct2 = new DataView(new ArrayBuffer(8 * 9));
	struct2.setBigInt64(8 * 1, BigInt(titleString), true);
	const zz = Citizen.InvokeNative("0x815C4065AE6E6071", struct1, struct2, 1);
	Citizen.InvokeNative("0x00A15B94CBA4F76F", zz);
});

exports('updateMissionNotif', (utitle, umsg, duration) => {
	const titleString = CreateVarString(10, "LITERAL_STRING", utitle);
	const msgString = CreateVarString(10, "LITERAL_STRING", umsg);
	const struct1 = new DataView(new ArrayBuffer(8 * 5));
	struct1.setInt32(0, duration, true);
	const struct2 = new DataView(new ArrayBuffer(8 * 9));
	struct2.setBigInt64(8 * 1, BigInt(titleString), true);
	struct2.setBigInt64(8 * 2, BigInt(msgString), true);
	const zz = Citizen.InvokeNative("0x9F2CC2439A04E7BA", struct1, struct2, 1);
	Citizen.InvokeNative("0x00A15B94CBA4F76F", zz);
});

exports('warningNotif', (title, msg, _audioRef, _audioName, duration) => {
	const titleString = CreateVarString(10, "LITERAL_STRING", title);
	const msgString = CreateVarString(10, "LITERAL_STRING", msg);
	const audioStringRef = CreateVarString(10, "LITERAL_STRING", _audioRef);
	const audioNameString = CreateVarString(10, "LITERAL_STRING", _audioName);
	const struct1 = new DataView(new ArrayBuffer(8 * 5));
	struct1.setInt32(0, duration, true);
	struct1.setBigInt64(8 * 0, BigInt(audioStringRef), true);
	struct1.setBigInt64(8 * 1, BigInt(audioNameString), true);
	struct1.setInt16(8 * 2, 4, true);
	const struct2 = new DataView(new ArrayBuffer(8 * 9));
	struct2.setBigInt64(8 * 2, BigInt(titleString), true);
	struct2.setBigInt64(8 * 3, BigInt(msgString), true);
	const zz = Citizen.InvokeNative("0x339E16B41780FC35", struct1, struct2, 1);
	Citizen.InvokeNative("0x00A15B94CBA4F76F", zz);
});
