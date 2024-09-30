const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const http = require("http");
// Thay [TOKEN-TELEGRAM-BOT] bằng token của bot Telegram của bạn
  const bot = new TelegramBot('7806956489:AAGJJgtGWBubkWtSAPtpFUYkJNNe6M2S9cI', { polling: true });
const balanceDBPath = './money.json';
let admin = '7368506325'
let box = 'id box'
let balanceDB = {};
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Code Được Tạo Bởi Kha");
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Kiểm tra xem file tồn tại chưa, nếu có thì load lên
if (fs.existsSync(balanceDBPath)) {
    const data = fs.readFileSync(balanceDBPath);
    balanceDB = JSON.parse(data);
}

// Lưu file balance sau mỗi lần thay đổi dữ liệu
function saveBalance() {
    fs.writeFileSync(balanceDBPath, JSON.stringify(balanceDB));
}

bot.on('dice', async (msg) => {
    const diceValue = msg.dice.value;

    // Lấy tên người dùng để hiển thị nếu cần
    const username = msg.from.username || `${msg.from.first_name} ${msg.from.last_name}`;

    // Kiểm tra nếu là bot
    const botName = `@${bot.options.username}`;
    const isBot = msg.from.username === bot.options.username;
    const prefix = isBot ? `${botName} đã gieo xúc xắc: ` : `${username} đã gieo xúc xắc: `;

    console.log(`${username} rolled a die: ${diceValue}`);
    // Gửi kết quả xúc xắc về cho người dùng
    try {
        const chatId = msg.chat.id;
        await bot.sendMessage(chatId, `${prefix}${diceValue}\nOk chưa`);
    } catch (error) {
        console.error(error);
    }
});

// Lấy thông tin người dùng
async function getUserInfo(userId) {
    try {
        const user = await bot.getUser(userId);
        const name = user.username || `${user.first_name} ${user.last_name}`;
        return name;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// c

// Lưu trữ danh sách mã code, số tiền và số người nhận tương ứng





// Hàm xử lý lệnh /code nhập mã và nhận tiền vào id telegram
// Lấy mã code từ thông điệp

      // Nếu đúng code, gửi tiền vào id telegram của người nhận
      // Ví dụ: sử dụng API để gửi tiền vào id telegram
      // sendMoneyToRecipient(msg.from.id, code);



// Lệnh tạo gift


// Lưu trữ các code và số tiền
let codes = {};

// Lệnh /taogift
bot.onText(/\/taocode (.+) (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const code = match[1];
  const amount = match[2];

  // Kiểm tra nếu code đã tồn tại
  if (codes[code]) {
    bot.sendMessage(chatId, 'Code đã tồn tại!');
    return;
  }

  // Lưu code và số tiền vào danh sách
  codes[code] = amount;
bot.sendMessage(box, `🎲🎲 Phát code ngẫu nhiên trong ngày
🎲 Code là: ${code}
🕢 Hạn sử dụng đến 20-09-2023 
❗️ Nhanh tay nhận nào cả nhà ơi 😍😍
⭕️ Cách nhận: Chat riêng với BOT @huykaiserOwO nội dung: /code [dấu cách gift code ở trên]
⭕️ VD: /code ${code}
⛔️ Lưu ý là chat riêng không phải chat trên nhóm các bạn nhé 😍😍`);
  bot.sendMessage(chatId, `Code ${code} đã tạo với số tiền ${amount} thành công ✅`);
});

bot.onText(/\/code (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const code = match[1];
  if (!codes[code]) {
    bot.sendMessage(chatId, 'Code không tồn tại hoặc đã được sử dụng ❌');
    return;
  }

  const amount = codes[code];

  bot.sendMessage(admin, `Id ${chatId} vừa nhập code: ${code} thành công ✅
Vui lòng dùng lệnh này để trả thưởng code cho id đó:
\`/trathuongcode ${chatId} ${amount}\``, { parse_mode: "Markdown" });
     bot.sendMessage(chatId, `Nhập code ${code} thành công với số tiền: ${amount}đ ✅`);
  bot.sendMessage(box, `➡️ Người chơi: [${chatId}] nhập code: ${code} thành công được ${amount}đ `);
  bot.sendMessage(-1001867884222, `➡️ Người chơi: [${chatId}] nhập code: ${code} thành công được ${amount}đ `);
bot.sendMessage(-1001867887282, `➡️ Người chơi: [${chatId}] nhập code: ${code} thành công được ${amount}đ `);
bot.sendMessage(-1001867889282, `➡️ Người chơi: [${chatId}] nhập code: ${code} thành công được ${amount}đ `);
bot.sendMessage(-1001867814282, `➡️ Người chơi: [${chatId}] nhập code: ${code} thành công được ${amount}đ `);
bot.sendMessage(-1001867882282, `➡️ Người chơi: [${chatId}] nhập code: ${code} thành công được ${amount}đ`);


  // Xoá code đã nhận tiền
  delete codes[code];

});

// Lệnh '/taogift'

bot.onText(/\/lakajsndndn (.+) (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const code = match[1];
  const amount = match[2];

  // Kiểm tra nếu code đã tồn tại
  if (codes[code]) {
    bot.sendMessage(chatId, 'Code đã tồn tại!');
    return;
  }
codes[code] = amount;
 bot.sendMessage(chatId, `Code ${code} đã tạo với số tiền ${amount} thành công ✅`);
});


  // Cộng tiền vào tài khoản người dùng
  // place your code here


// h

bot.onText(/\/lalalalalalac/, async (msg) => {
    const userId = msg.from.id;
// Lấy thời gian hiện t
    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `/code [dấu cách] GIFT CODE để nhận code bạn nhé
⭕️ VD: /code LMMabc123
✅ Tham gia nhóm để nhận code hàng ngày bạn nhé https://web.telegram.org/a/#-1002339938423
`);
});
// c

// start
bot.onText(/\/start/, async (msg) => {
    const userId = msg.from.id;

    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `➡️ Id của bạn là: \`${userId}\`

⭕️ Các chức năng của BOT bao gồm:
1️⃣ /momo [dấu cách] sđt [dấu cách] số tiền muốn rút về momo
➡️ Vd: /momo 0987112233 200000 

2️⃣ /nap để lấy nội dung nạp tiền
3️⃣ /lode để lấy danh sách game chơi và tỷ lệ thắng
4️⃣ /momo cách rút tiền ví momo
5️⃣ /nganhang cách rút tiền về ngân hàng 
6️⃣ /link dùng để lấy link giới thiệu
7️⃣ /sodu xem số dư tài khoản
⭕️ /start để xem lại danh sách này

⭕️ Chú ý đề phòng lừa đảo, BOT không tự nhắn tin cho người khác được vì vậy không tin bất cứ ai hết, nếu BOT thật thì bên dưới Tên sẻ có thêm chữ bot

⭕️ Hướng dẫn cách chơi: /lode

➡️ Khi BOT trả lời mới được tính là đã cược thành công ngược lại sẻ tính là bill lỗi không được hệ thống ghi nhận (không mất tiền)


`, { parse_mode: "Markdown" });
});
// Lệnh xem số dư
bot.onText(/\/sodu/, async (msg) => {
    const userId = msg.from.id;

    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `Số dư của bạn: ${balance}đ ✅`);
});

//xxx
bot.onText(/\/chuyentien/, async (msg) => {
    const userId = msg.from.id;
    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `/ct + id + số tiền
Ví dụ: /ct 123456789 10000`);
});
// info
bot.onText(/\/id/, async (msg) => {
    const userId = msg.from.id;
    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `Id của bạn là: \`${userId}\` ✅`, { parse_mode: "Markdown" });
});
// Lệnh xem id
// mm  
bot.onText(/\/trathuongcode (\d+) (\d+)/, async (msg, match) => {
    const senderId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    // Thực hiện tặng tiền
    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] + amount : amount;
    saveBalance();
const balance = balanceDB[receiverId] || 0;
  const { format } = require('date-fns');

// Lấy thời gian hiện tại
const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);
    await bot.sendMessage(receiverId, `✅ Code Có Giá Trị : ${amount}₫
✅ Số Dư Hiện Tại : ${balance}
⏱ Update Time: ${currentTime}`);
bot.sendMessage(msg.chat.id, `✅ Chúc Mừng Bạn Nhập Code Thành Công ID : ${receiverId} ${amount}đ`);
});
// mm 
bot.onText(/\/ttcode (\d+) (\d+)/, async (msg, match) => {
    const senderId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    // Thực hiện tặng tiền
    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] + amount : amount;
    saveBalance();
const balance = balanceDB[receiverId] || 0;
  const { format } = require('date-fns');

// Lấy thời gian hiện tại
const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);
    await bot.sendMessage(receiverId, `✅ Trả thưởng code: ${amount}đ
⏱ update time: ${currentTime}`);
bot.sendMessage(msg.chat.id, `✅ Trả code thành công id: ${receiverId} ${amount}đ ✅`);
});
// trừ tiền 
bot.onText(/\/bll (\d+) (\d+)/, async (msg, match) => {
    const senderId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    // Thực hiện tặng tiền /admintrubalace + id người chơi + số tiền muốn trừ 
// Vd: /admintrubalace 1929291817 50000

    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] - amount : amount;
    saveBalance();
    await 
      bot.sendMessage(msg.chat.id, `Trừ thành công ${amount}đ id: ${receiverId} ✅`);
  bot.sendMessage(receiverId, `Bạn bị admin trừ ${amount}đ 🛑`);
});
  // cc

// Lệnh chuyển tiền

  bot.onText(/\/hoantien (\d+) (\d+)/, async (msg, match) => {
  const sendeId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    // Thực hiện tặng tiền
    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] + amount : amount;
    saveBalance();
const userId = msg.from.id;
    const balance = balanceDB[userId] 

    await 

      bot.sendMessage(receiverId, `❌ Rút không thành công ${amount}đ
❌ Vui x1 vòng cược để được rút!!! `);
      bot.sendMessage(msg.chat.id, `Admin hoàn tiền id: ${receiverId} với số tiền ${amount}đ ✅ `);
});
// gtheiu


// Xử lý khi bot nhận được lệnh /start hoặc /gioithieu


  // Tiến hành cộng 1000đ cho người giới thiệu (nếu có)

// Tạo link giới thiệu với mã người giới thiệu

// Lưu trữ danh sách người giới thiệu và số tiền đã nhận
const referrerList = {};

bot.onText(/\/link/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const refLink = `https://www.facebook.com/hoangkha.nguyenhuynh.73/`; // link giới thiệu của bot

  bot.sendMessage(chatId, `🌹 Giới thiệu để nhận 5% tiền khi người chơi nạp:\n${refLink}`);

  // Kiểm tra xem người giới thiệu đã nhận được phần thưởng chưa
  if (!referrerList[userId]) {
    referrerList[userId] = false;
  }
});

bot.onText(/\/hoahong/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Kiểm tra xem người giới thiệu đã nhận được phần thưởng chưa
  if (referrerList[userId] === false) {
    referrerList[userId] = true;
    // Thực hiện mã logic nó để gửi 1k cho người giới thiệu

    bot.sendMessage(chatId, 'Bạn tham gia thành công từ link giới thiệu ');
  } else {
    bot.sendMessage(chatId, 'Bạn đã nhận phần thưởng giới thiệu từ trước rồi ');
  }
});

bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const referrerId = parseInt(match[1]);

  if (referrerList[referrerId] === false) {
    referrerList[referrerId] = true;
    // Thực hiện mã logic để gửi 1k cho người giới thiệu

    bot.sendMessage(refLink, `Bạn giới thiệu thành công id: ${userId}`);
  } else {
    bot.sendMessage(chatId, 'Bạn đã tham gia giới thiệu từ trước ❌');
  }
});


// Hàm tạo mã giới thiệu cho người giới thiệu


bot.onText(/\/ruttien (\d+) (\d+)/, async (msg, match) => {
    const senderId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    // Thực hiện tặng tiền
    balanceDB[receiverId] = balanceDB[receiverId] 
    saveBalance();
const balance = balanceDB[receiverId] || 0;
  const { format } = require('date-fns');

// Lấy thời gian hiện tại
const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);
    await bot.sendMessage(receiverId, `✅ Rút tiền thành công : ${amount}đ
✅ Số dư hiện tại: ${balance}
⏱ update time: ${currentTime}
⚠️ Gõ /xx để xem game và /nap để lấy nd nạp tiền nhé❗`);
bot.sendMessage(msg.chat.id, `✅ Rút tiền thành công : ${receiverId} ${amount}đ`);
});
//thông tin giới thiệu vào cơ sở dữ liệu (vd: MongoDB, MySQL, ...)
  // và trả về mã giới thiệu tương ứng
  // Sử dụng thời gian hiện tại để tạo mã giới thiệu có tính ngẫu nhiên


// Hàm lưu thông tin giới thiệu vào cơ sở dữ liệu

  // Thực hiện lưu thông tin vào cơ sở dữ liệu
  // vd: lưu referrerId và referralCode trong bảng Referrals
  // Cài đặt thích hợp cho hệ thống của bạn



  // TODO: Gọi hàm để cộng điểm cho người giới thiệu
bot.onText(/\/ketquathua (\d+) (\d+)/, 
async (msg, match) => {

  const sendeId = bot.options.username;
    const receiverId = match[1];

const userId = msg.from.id;
    const balance = balanceDB[receiverId]
// Lấy thời gian hiện tại
// Lấy giá trị thời gian hiện tại 

const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);

   // In chuỗi thời gian đã định dạng 
    await 
      bot.sendMessage(msg.chat.id, `Báo kết quả thua thành công cho id ${receiverId} ✅`);
  bot.sendMessage(receiverId, `┏━━━━━━━━━━━━━━━┓
┣ Id cược: ${receiverId}
┣ Trạng Thái: Thua ❌
┣ ${currentTime}
┣ Số dư còn lại: ${balance}đ
┗━━━━━━━━━━━━━━━┛`);
});
// cc
bot.onText(/\/ketquathangpa (\d+) (\d+)/, 
async (msg, match) => {
  const sendeId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    // Thực hiện tặng tiền
    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] + amount : amount;
    saveBalance();
const userId = msg.from.id;
  const balance = balanceDB[receiverId]

// Lấy thời gian hiện tại
// Lấy giá trị thời gian hiện tại 

const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);

   // In chuỗi thời gian đã định dạng



    await 
      bot.sendMessage(msg.chat.id, `Trả thưởng thành công cho id ${receiverId} với số tiền ${amount}✅`);
  bot.sendMessage(receiverId, `┏━━━━━━━━━━━━━━━┓
┣ Id cược: ${receiverId}
┣ Số tiền: ${amount}đ
┣ Trạng Thái: Thắng ✅
┣ ${currentTime}
┣ Số dư còn lại: ${balance}đ
┗━━━━━━━━━━━━━━━┛`);
});

// Lệnh tặng tiền
bot.onText(/\/napid (\d+) (\d+)/, 
async (msg, match) => {

  const sendeId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    // Thực hiện tặng tiền
    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] + amount : amount;
    saveBalance();
const userId = msg.from.id;
    const balance = balanceDB[receiverId]

// Lấy thời gian hiện tại
// Lấy giá trị thời gian hiện tại 

const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');

console.log(currentTime);

   // In chuỗi thời gian đã định dạng



    await 
      bot.sendMessage(msg.chat.id, `Bạn vừa nạp thành công ${amount}
Id: ${receiverId} ✅`);     
            bot.sendMessage(receiverId, `✅ Nạp thành công
➡️ Nội dung:   NAP ${userId}
➡️ Số tiền:  ${amount}đ
➡️ Số dư hiện tại:  ${balance}đ
➡️ Thời gian: ${currentTime}

➡️ Cách chơi: Chat tại đây nội dung như sau: /lode Nội dung cược [dấu cách] số tiền cược (VD: /lode LO25 10000 or /lode DE10 10000 or  /lode XIEN20-50 10000 )

➡️ Cách chơi xúc xắc telegram: gõ lệnh /xx để xem hướng dẫn

➡️ Khi BOT trả lời mới được tính là đã cược thành công ngược lại sẻ tính là bill lỗi không được hệ thống ghi nhận (không mất tiền)

➡️ Kết quả sẻ được đối chiếu với kết quả Xổ Số Kiến Thiết Miền Bắc (Con số được nhà nước cung cấp nên không lo bịp)

/lode để lấy danh sách game chơi và tỷ lệ thắng

Chúc bạn chơi game vui vẻ!!!`);
bot.sendMessage(admin,`Thông báo nạp tiền ⚠️
Id: ${receiverId}
Số tiền: ${amount}đ ✅
Thời gian: ${currentTime}`);
    // Gửi kết quả và số dư sau khi đặt cược
  bot.sendMessage(box, `✅ Người dùng: ${receiverId} vừa nạp số tiền: ${amount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(box, `✅ Người dùng: ${receiverId} vừa nạp số tiền: ${amount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(-1001867880282, `✅ Người dùng: ${receiverId} vừa nạp số tiền: ${amount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(-1001857884282, `✅ Người dùng: ${receiverId} vừa nạp số tiền: ${amount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(-1001867184282, `✅ Người dùng: ${receiverId} vừa nạp số tiền: ${amount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(-1001867894282, `✅ Người dùng: ${receiverId} vừa nạp số tiền: ${amount}đ thành công lúc: ${currentTime} `);
});
// Gửi kết quả xúc xắc về cho người dùng
//
bot.onText(/\/napmbggg/, async (msg) => {
    const userId = msg.from.id;

    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `
➡️ Chuyển tiền đến số mb bên dưới:
➡️ Số tài khoản: 
➡️ Tên người nhận: 
➡️ Nội dung: NAP ${userId}

➡️ Nạp tối thiểu 10.000đ trở lên

➡ Hỗ trợ: @to787899
🛑 Nếu quá 5-10 phút tiền chưa vào tài khoản hãy liên hệ CSKH để được hỗ trợ sớm nhất!!! ` );
}); 
//c

  // Lưu thông tin về người được mời và số tiền cộng vào database, hoặc bất kỳ cơ chế lưu trữ nào phù hợp


//hhh
bot.onText(/\/nap/, async (msg) => {
    const userId = msg.from.id;

    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `
➡️ Mb Bank: \`0769532711\`
➡️ Tên người nhận: \`Nguyen Huynh Hoang Kha\`
➡️ Nội dung: \`NAP ${userId}\`
➡️ MoMo: \`0769532711\`
➡️ Tên người nhận: \`Nguyen Huynh Hoang Kha\`
➡️ Nội dung: \`NAP ${userId}\`
Chú Ý : NẠP + ID 
Nạp tối thiếu 50.000đ trở lên

🛑 Nếu quá 5-10 phút tiền chưa vào tài khoản hãy liên hệ CSKH để được hỗ trợ sớm nhất!!! `, { parse_mode: "Markdown" });
});
// lệnh rút 
bot.onText(/^\/momo|alalalkcckmf/, async (msg, match) => {
  const userId = msg.from.id;
    const command = msg.text.split(" ");

  if (command.length !== 3) {
    const sendeId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);   
    await 
    bot.sendMessage(msg.chat.id, `❌ [Rút Tiền] [MOMO] Vui lòng viết đúng cú pháp!!

/momo [dấu cách] sđt [dấu cách] số tiền muốn rút để rút tiền về momo

    ➡️ Vd:   /momo 0987112233 200000❗
   ⚠️ Lưu ý: ❌ Vui lòng nhập đúng Số Điện Thoại cần rút nếu sai ngân hàng thì sẽ bị phạt cho mỗi giao dịch: 20.000đ 

➡️ Min rút 200.000đ trở lên ❗️ `);
        return;
    }
   const [betTypeRaw, betAmount] = [command[1], parseInt(command[2])];
  // Kiểm tra số tiền của người dùng hằng số số dư người dùng  
const userBalance = balanceDB[userId] || 0;



  if (betAmount <=  9999 ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng rút trên 10.000đ ❌`);
        return;
  }
  if (userBalance <= betAmount) {
        await
  bot.sendMessage(msg.chat.id, `Số dư không đủ để thực hiện giao dịch ❌`);
        return;
  }
  if (betAmount <= 0  ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng rút trên 10.000đ ❌`);
        return;
  }
  if (1000000 <= betAmount  ) {
        await
  bot.sendMessage(msg.chat.id, `Rút tối đa 10.000.000đ 1 lượt ❌`);
        return;
  }

    // Thực hiện tặng tiền
    balanceDB[userId] = balanceDB[userId] ? balanceDB[userId] - betAmount : betAmount;

const userBalanceAfter = balanceDB[userId] || 0;  
    saveBalance();
// Lấy giá trị thời gian hiện tại 
 const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);
   // In chuỗi thời gian đã định dạng
   function generateRandomNumber() {
  // Tạo số ngẫu nhiên từ 1000000 đến 9999999 (có 7 chữ số)
  const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
  return randomNumber;
}

// Sử dụng hàm để tạo số ngẫu nhiên có 7 chữ số
const randomSevenDigitNumber = generateRandomNumber();
console.log(randomSevenDigitNumber);

  await

bot.sendMessage(msg.chat.id, `✅ Rút tiền thành công ✅
➡ Momo: ${betTypeRaw}
➡️ Số tiền: ${betAmount}đ 
➡ Trạng thái: Chờ xử lí ⏱️
➡ Thời gian rút: ${currentTime}
➡ Số dư còn lại: ${userBalanceAfter}
➡ Hoá đơn: #${randomSevenDigitNumber}
`);
    // Gửi kết quả và số dư sau khi đặt cược
    bot.sendMessage(msg.chat.id, `Lệnh rút được ghi nhận thành công vui lòng đợi trong dây lát ✅`);
// Gửi kết quả xúc xắc về cho người dùng
bot.sendMessage(admin,`Người chơi có id: ${userId}
Số tiền rút: \`${betAmount}\`đ
Momo: \`${betTypeRaw}\`
Thời gian rút: ${currentTime}
Số dư còn lại của người chơi: ${userBalanceAfter}đ 
# /ruttien (id) (money) để tb đơn ruttien thanhcong
# /hoantien (id) (money) để tb đơn ruttien bi hủy và đã hoan tien
Hoá đơn: #${randomSevenDigitNumber}`, { parse_mode: "Markdown" });
    // Gửi kết quả và số dư sau khi đặt cược
  bot.sendMessage(box, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về ví momo lúc: ${currentTime} `);
bot.sendMessage(-1001867884202, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về ví momo lúc: ${currentTime} `);
bot.sendMessage(-1001877884282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về ví momo lúc: ${currentTime} `);
bot.sendMessage(-1001867889282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về ví momo lúc: ${currentTime} `);
bot.sendMessage(-1001867824282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về ví momo lúc: ${currentTime} `);
bot.sendMessage(-1001887884282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về ví momo lúc: ${currentTime} `);
});

//
// Ngân hàng
bot.onText(/^\/nganhang|kdkdkdnsbsb/, async (msg, match) => {
  const userId = msg.from.id;
    const command = msg.text.split(" ");

  if (command.length !== 3) {
    const sendeId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);   
    await
    bot.sendMessage(msg.chat.id, `🏧 Vui lòng thực hiện theo hướng dẫn sau:

👉 /nganhang [dấu cách] Số tài khoản kèm ngân hàng [dấu cách] Số tiền muốn rút
👉 VD:  Muốn rút 100k đến TK số 01234567890 tại Ngân hàng Vietcombank. Thực hiện theo cú pháp sau:

/nganhang 01234567890mb 100000

⚠️ Lưu ý: ❌ Vui lòng nhập đúng ngân hàng cần rút nếu sai ngân hàng thì sẽ bị phạt cho mỗi giao dịch: 20.000đ 
➡️ Min rút 200.000đ trở lên ❗ `);
        return;
    }
   const [betTypeRaw, betAmount] = [command[1], parseInt(command[2])];
  // Kiểm tra số tiền của người dùng hằng số số dư người dùng  
 const userBalance = balanceDB[userId] || 0;



  if (betAmount <=  20000 ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng rút trên 20.000đ ❌`);
        return;
  }
  if (userBalance <= betAmount) {
        await
  bot.sendMessage(msg.chat.id, `Số dư không đủ để thực hiện giao dịch ❌`);
        return;
  }
  if (betAmount <= 0  ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng rút trên 20.000đ ❌`);
        return;
  }
  if (1000000 <= betAmount  ) {
        await
  bot.sendMessage(msg.chat.id, `Rút tối đa 10.000.000đ 1 lượt ❌`);
        return;
  }

    // Thực hiện tặng tiền
    balanceDB[userId] = balanceDB[userId] ? balanceDB[userId] - betAmount : betAmount;

const userBalanceAfter = balanceDB[userId] || 0;  
    saveBalance();

   const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);

  await 
    bot.sendMessage(msg.chat.id, `✅ Rút tiền thành công ✅
➡ Stk + Ngân hàng: ${betTypeRaw}
➡️ Số tiền: ${betAmount}đ 
➡ Trạng thái: Chờ xử lí ⏱️
➡ Thời gian rút: ${currentTime}`);
    // Gửi kết quả và số dư sau khi đặt cược
    bot.sendMessage(msg.chat.id, `Lệnh rút được ghi nhận thành công vui lòng đợi trong dây lát ✅`);
// Gửi kết quả xúc xắc về cho người dùng

bot.sendMessage(admin,`Người chơi có id: ${userId}
Số tiền rút: \`${betAmount}\`đ
Stk + Ngân hàng: \`${betTypeRaw}\`
thời gian rút: ${currentTime}
Số dư còn lại của người chơi: ${userBalanceAfter}đ `, { parse_mode: "Markdown" });
    // Gửi kết quả và số dư sau khi đặt cược ReferenceError: định dạngThời gian không được xác định

bot.sendMessage(box, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về tài khoản ngân hàng lúc: ${currentTime} `);
bot.sendMessage(-1001867884292, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về tài khoản ngân hàng lúc: ${currentTime} `);
bot.sendMessage(-1001867814282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về tài khoản ngân hàng lúc: ${currentTime} `);
bot.sendMessage(-1301867884282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về tài khoản ngân hàng lúc: ${currentTime} `);
bot.sendMessage(-1001864884282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về tài khoản ngân hàng lúc: ${currentTime} `);
bot.sendMessage(-1051867884282, `✅ Người dùng: ${userId} vừa rút ${betAmount}đ thành công về tài khoản ngân hàng lúc: ${currentTime} `);
});
// cc
bot.onText(/^\/bongda|alalalkcckmf/, async (msg, match) => {
  const userId = msg.from.id;
    const command = msg.text.split(" ");

  if (command.length !== 3) {
    const sendeId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);   
    await 
    bot.sendMessage(msg.chat.id, `💰 Bóng Đá 💰

🔖 Đây là game dựa vào kết quả tỉ số Millwal u21 - Crewe Alexandra 4/9 20:00

➡️ Game Game Bóng Đá
Nội dung |  chọn đội    |  Tỷ lệ ăn


👉 Số tiền chơi tối thiểu là 20,000đ và tối đa là 1,000,000đ

🎮 Cách chơi: Chat tại đây theo cú pháp: 
Nội dung ĐỘIDỰĐOÁN Tiền cược 

Lưu ý: Nếu Cược TX mà hoà thì sẽ hoàn 80% 

VD: /bongda Millwal 20000 or  /bongda CreweAlexandra 20000 or /bongda tai 20000
 `, { parse_mode: "Markdown" });
    return;
      }
   const [betTypeRaw, betAmount] = [command[1], parseInt(command[2])];
  // Kiểm tra số tiền của người dùng hằng số số dư người dùng  
const userBalance = balanceDB[userId] || 0;
  if (betAmount <=  19999 ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng cược trên 20.000đ ❌`);
        return;
  }
  if (userBalance <= betAmount) {
        await
  bot.sendMessage(msg.chat.id, `Số dư không đủ để thực hiện giao dịch ❌`);
        return;
  }
  if (betAmount <= 0  ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng cược trên 1.000đ ❌`);
        return;
  }

    // Thực hiện tặng tiền
    balanceDB[userId] = balanceDB[userId] ? balanceDB[userId] - betAmount : betAmount;

const userBalanceAfter = balanceDB[userId] || 0;  
    saveBalance();
// Lấy giá trị thời gian hiện tại 
 const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);
   // In chuỗi thời gian đã định dạng

function generateRandomNumber() {
  // Tạo số ngẫu nhiên từ 1000000 đến 9999999 (có 7 chữ số)
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return randomNumber;
}

// Sử dụng hàm để tạo số ngẫu nhiên có 7 chữ số
const randomSevenDigitNumber = generateRandomNumber();
console.log(randomSevenDigitNumber);

let betamount ; // Giả sử betamount có giá trị là 10
let result1 = betAmount * 1.9;
console.log(result1);
let result2 = betAmount * 2.9;
console.log(result2);
 // Giả sử betamount có giá trị là 10
  await

bot.sendMessage(msg.chat.id, `┏━━━━━━━━━━━━━━━┓
┣ Id cược: ${userId}
┣ ND cược: ${betTypeRaw}
┣ Tiền cược: ${betAmount}đ
┣ Trạng Thái: Chờ kết quả lúc 20:00 ⚠️
┣ ${currentTime}
┣ Số dư còn lại: ${userBalanceAfter}đ
┣ Hoá đơn : #${randomSevenDigitNumber}
┗━━━━━━━━━━━━━━━┛`);



    // Gửi kết quả và số dư sau khi đặt cược

// Gửi kết quả xúc xắc về cho người dùng
bot.sendMessage(admin,`➡ Người chơi có id: ${userId}

➡ Hoá đơn: #${randomSevenDigitNumber}

➡ Đánh với số tiền: ${betAmount}đ

➡ Nội dung: ${betTypeRaw}

➡ Thời gian cược: ${currentTime}

➡ Gửi lệnh này nếu người chơi thắng đội win: \`/ketquathang ${userId} ${result1}\`

➡ Gửi lệnh này nếu người chơi thắng hoà: \`/ketquathang ${userId} ${result2}\`

➡ Gửi lệnh này nếu người chơi thua: \`/ketquathua ${userId} 1\`

➡ Số dư còn lại của người chơi: ${userBalanceAfter}đ 
`, { parse_mode: "Markdown" });
    // Gửi kết quả và số dư sau khi đặt cược

bot.sendMessage(box, `✅ Người dùng ${userId} vừa cược đội ${betTypeRaw} với số tiền ${betAmount}đ thành công lúc: ${currentTime} `);
  bot.sendMessage(-1001467884212, `✅ Người dùng ${userId} vừa cược đội ${betTypeRaw} với số tiền ${betAmount}đ thành công lúc: ${currentTime}`);
bot.sendMessage(-1001817884282, `✅ Người dùng ${userId} vừa cược đội ${betTypeRaw} với số tiền ${betAmount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(-1002867884282, `✅ Người dùng ${userId} vừa cược đội ${betTypeRaw} với số tiền ${betAmount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(-1004186788422, `✅ Người dùng ${userId} vừa cược đội ${betTypeRaw} với số tiền ${betAmount}đ thành công lúc: ${currentTime}`);
bot.sendMessage(-1001267884284, `✅ Người dùng ${userId} vừa cược đội ${betTypeRaw} với số tiền ${betAmount}đ thành công lúc: ${currentTime}`);
});
// cc
bot.onText(/^\/lode|alalalkcckmf/, async (msg, match) => {
  const userId = msg.from.id;
    const command = msg.text.split(" ");

  if (command.length !== 3) {
    const sendeId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);   
    await 
    bot.sendMessage(msg.chat.id, `💰 Lô Đề 💰

🔖 Đây là game dựa vào 2 SỐ CUỐI các giải của Xổ Số Miền Bắc được quay vào lúc 18h30 hàng ngày!

➡️ Game Lô Đề
Nội dung |  2 số cuối    |  Tỷ lệ ăn
 XIEN       |  2 số Tất cả giải XSMB  |  x15
 LO           |  Tất cả giải XSMB       |  x3.5
 DE           |  Giải Đặc Biệt XSMB     |  x80

👉 Số tiền chơi tối thiểu là 1,000đ và tối đa là 1,000,000đ

🎮 Cách chơi: Chat tại đây theo cú pháp: 
Nội dung SỐ_DỰ_ĐOÁN Tiền cược 

VD: /lode LO25 10000 or  /lode DE10 10000 or  /lode XIEN20-50 10000 `);
        return;
    }
   const [betTypeRaw, betAmount] = [command[1], parseInt(command[2])];
  // Kiểm tra số tiền của người dùng hằng số số dư người dùng  
const userBalance = balanceDB[userId] || 0;
  if (betAmount <=  999 ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng cược trên 1.000đ ❌`);
        return;
  }
  if (userBalance <= betAmount) {
        await
  bot.sendMessage(msg.chat.id, `Số dư không đủ để thực hiện giao dịch ❌`);
        return;
  }
  if (betAmount <= 0  ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng cược trên 1.000đ ❌`);
        return;
  }

    // Thực hiện tặng tiền
    balanceDB[userId] = balanceDB[userId] ? balanceDB[userId] - betAmount : betAmount;

const userBalanceAfter = balanceDB[userId] || 0;  
    saveBalance();
// Lấy giá trị thời gian hiện tại 
 const moment = require('moment-timezone');
const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);
   // In chuỗi thời gian đã định dạng

function generateRandomNumber() {
  // Tạo số ngẫu nhiên từ 1000000 đến 9999999 (có 7 chữ số)
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return randomNumber;
}

// Sử dụng hàm để tạo số ngẫu nhiên có 7 chữ số
const randomSevenDigitNumber = generateRandomNumber();
console.log(randomSevenDigitNumber);

let betamount ; // Giả sử betamount có giá trị là 10
let result1 = betAmount * 3.5;
console.log(result1);
 // Giả sử betamount có giá trị là 10
let result2 = betAmount * 15;
console.log(result2);
let result3 = betAmount * 80;
console.log(result3);                                    
  await

bot.sendMessage(msg.chat.id, `┏━━━━━━━━━━━━━━━┓
┣ Id cược: ${userId}
┣ ND cược: ${betTypeRaw}
┣ Tiền cược: ${betAmount}đ
┣ Nếu thắng lô: ${result1}đ 
┣ Nếu thắng xiên: ${result2}đ
┣ Nếu thắng đề: ${result3}đ
┣ Nếu thua: 0đ
┣ Trạng Thái: Chờ kết quả lúc 18:30 ⚠️
┣ ${currentTime}
┣ Số dư còn lại: ${userBalanceAfter}đ
┣ Hoá đơn : #${randomSevenDigitNumber}
┗━━━━━━━━━━━━━━━┛`);



    // Gửi kết quả và số dư sau khi đặt cược

// Gửi kết quả xúc xắc về cho người dùng
bot.sendMessage(admin,`➡ Người chơi có id: ${userId}

➡ Hoá đơn: #${randomSevenDigitNumber}

➡ Đánh với số tiền: ${betAmount}đ

➡ Nội dung: ${betTypeRaw}

➡ Thời gian cược: ${currentTime}

➡ Gửi lệnh này nếu người chơi thắng lô: \`/ketquathang ${userId} ${result1}\`

➡ Gửi lệnh này nếu người chơi thắng xiên: \`/ketquathang ${userId} ${result2}\`

➡ Gửi lệnh này nếu người chơi thắng đề: \`/ketquathang ${userId} ${result3}\`

➡ Gửi lệnh này nếu người chơi thua: \`/ketquathua ${userId} 1\`

➡ Số dư còn lại của người chơi: ${userBalanceAfter}đ 
`, { parse_mode: "Markdown" });
    // Gửi kết quả và số dư sau khi đặt cược

bot.sendMessage(box, `✅ Người dùng ${userId} vừa cược lô đề với số tiền ${betAmount}đ thành công lúc: ${currentTime} `);
  bot.sendMessage(box, `✅ Người dùng ${userId} vừa cược lô đề với số tiền ${betAmount}đ thành công lúc: ${currentTime}`);
bot.sendMessage(box, `✅ Người dùng ${userId} vừa cược lô đề với số tiền ${betAmount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(box, `✅ Người dùng ${userId} vừa cược lô đề với số tiền ${betAmount}đ thành công lúc: ${currentTime} `);
bot.sendMessage(box, `✅ Người dùng ${userId} vừa cược lô đề với số tiền ${betAmount}đ thành công lúc: ${currentTime}`);
bot.sendMessage(-1091867886282, `✅ Người dùng ${userId} vừa cược lô đề với số tiền ${betAmount}đ thành công lúc: ${currentTime}`);
});
// kk

// Lệnh xem top 5 người giàu nhất
// Lệnh xem top 5 người giàu nhất
bot.onText(/\/topdssthegioi/, async (msg) => {
    const userIds = Object.keys(balanceDB);
    const names = await Promise.all(userIds.map(getUserInfo));

    // Sắp xếp theo số dư giảm dần
    const users = userIds.map((id, index) => ({ id, name: names[index], balance: balanceDB[id] }));
    users.sort((a, b) => b.balance - a.balance);

    // Lấy top 5
    const topUsers = users.slice(0, 5);

    // Hiển thị danh sách top 5
    let message = '5 id Giàu nhất:\n';
    topUsers.forEach((user, index) => {
        message += `${index + 1}. ${user.id}: ${user.balance}đ\n`;
    });

    await bot.sendMessage(msg.chat.id, message);
});
bot.onText(/\/lzkxjsjj/, async (msg) => {
    const userIds = Object.keys(balanceDB);
    const names = await Promise.all(userIds.map(getUserInfo));

    // Sắp xếp theo số dư giảm dần
    const users = userIds.map((id, index) => ({ id, name: names[index], balance: balanceDB[id] }));
    users.sort((a, b) => b.balance - a.balance);

    // Lấy top 5
    const topUsers = users.slice(0, 100);

    // Hiển thị danh sách top 5
    let message = 'Danh sách người chơi và số tiền:\n';
    topUsers.forEach((user, index) => {
        message += `${index + 1}. ${user.id}: ${user.balance} đ\n`;
    });

    await bot.sendMessage(msg.chat.id, message);
});
// Lệnh làm việc để nhận tiền miễn phí
bot.onText(/emxin50kcuaad/, async (msg) => {
    const userId = msg.from.id;

    // Kiểm tra người dùng đã làm việc chưa
    const now = Date.now();
    const lastWorkTime = balanceDB[userId]?.lastWorkTime || 1;
    const elapsedTime = (now - lastWorkTime) / 1; // Thời gian đã trôi qua tính bằng giây
    if (elapsedTime < 300) { // 300 giây = 5 phút
        await bot.sendMessage(msg.chat.id, `Bạn phải chờ ${300 - elapsedTime} giây nữa để làm việc tiếp!`);
        return;
    }

    // Thưởng tiền miễn phí (giả sử là 1000 đ)
    balanceDB[userId] = balanceDB[userId] ? balanceDB[userId] + 50000 : 50000;
    balanceDB[userId].lastWorkTime = now;
    saveBalance();
const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `Admin tặng bạn code 50k số dư hiện tại là ${balance}đ ✅ `);
});

// Lệnh ban/unban người dùng
bot.onText(/\/(ban|unban) (\d+|@\w+) (.+)/, async (msg, match) => {
    const userId = msg.from.id;

    // Kiểm tra nếu là admin
    if (userId !== ADMIN_USER_ID) {
        await bot.sendMessage(msg.chat.id, 'Bạn phải là admin để sử dụng lệnh này!');
        return;
    }

    const isBan = match[1] === 'ban';
    const target = match[2];
    const reason = match[3];

    // Lấy thông tin người dùng để ban/unban
    const targetId = parseInt(target.startsWith('@') ? target.slice(1) : target);
    const targetName = await getUserInfo(targetId);
    if (!targetName) {
        await bot.sendMessage(msg.chat.id, `Người dùng với ID ${targetId} không tồn tại!`);
        return;
    }

    // Ban/unban người dùng
    if (isBan) {
        balanceDB[targetId] = undefined; // Xóa số dư của người dùng
        // Lưu thông tin ban vào database
        // Ví dụ: banReasonDB[targetId] = `Bạn đã bị ban vĩnh viễn vì ${reason}`;
        await bot.sendMessage(msg.chat.id, `${targetId} đã bị ban vĩnh viễn vì ${reason}`);
    } else {
        // Xóa thông tin ban của người dùng và khôi phục số dư (nếu đã có)
        // Ví dụ:
banReasonDB[targetId] = undefined;
        await bot.sendMessage(msg.chat.id, `${targetId} đã được unban`); 
    }
    saveBalance();
});


// Kiểm tra xem file tồn tại chưa, nếu có thì load lên



    // Gửi kết quả xúc xắc về cho 

// Lệnh chuyển tiền
bot.onText(/\/cffft (\d+) (\d+)/, async (msg, match) => {
    const senderId = msg.from.id;
    const receiverId = match[1];
    const amount = parseInt(match[2]);

    // Kiểm tra đủ tiền để chuyển không
    if (!balanceDB[senderId] || balanceDB[senderId] < amount) {
        await bot.sendMessage(msg.chat.id, 'Số tiền không đủ để thực hiện giao dịch!');
        return;
    }

    // Kiểm tra người nhận có tồn tại không
    const receiverName = await getUserInfo(receiverId);
    if (!receiverName) {
        await bot.sendMessage(msg.chat.id, `Người dùng với ID ${receiverId} không tồn tại!`);
        return;
    }

    // Thực hiện chuyển tiền
    balanceDB[senderId] -= amount;
    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] + amount : amount;
    saveBalance();

    await bot.sendMessage(msg.chat.id, `${amount} đ đã chuyển cho ${receiverName}`);
});

bot.onText(/\/sffdffd/, async (msg) => {
    const userId = msg.from.id;

    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `Số dư của bạn: ${balance} đ`);
});

bot.onText(/\/gifff (\d+) (\d+)/, async (msg, match) => {
    const senderId = bot.options.username;
    const receiverId = match[1];
    const amount = parseInt(match[2]);
    balanceDB[receiverId] = balanceDB[receiverId] ? balanceDB[receiverId] + amount : amount;
    saveBalance();

    await bot.sendMessage(msg.chat.id, `Bạn đã tặng ${receiverName} ${amount} đ`);
});
// cc
bot.onText(/\/ncddap/, async (msg) => {
    const userId = msg.from.id;

    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `
Mb: ?
?
MoMo:  0338505895
Bui Van Viet
Nội Dung: @username tele của bạn.
ví Dụ: @minhhaophong  `);
});

bot.onText(/\/rffffcut/, async (msg) => {
    const userId = msg.from.id;

    const balance = balanceDB[userId] || 0;
    await bot.sendMessage(msg.chat.id, `Bạn Muốn Rút Vui Lòng Vô Box @isgamerpv_jb Để Đại Lí Hướng Dẫn Rút Tiền.`);
});

bot.onText(/\/topthegioi/, async (msg) => {
    const userIds = Object.keys(balanceDB);
    const names = await Promise.all(userIds.map(getUserInfo));
    const users = userIds.map((id, index) => ({ id, name: names[index], balance: balanceDB[id] }));
    users.sort((a, b) => b.balance - a.balance);
    const topUsers = users.slice(0, 100);
    let message = '✅ Top Người Chơi Cược Nhiều Nhất :\n';
    topUsers.forEach((user, index) => {
        message += `${index + 1}. \`${user.id}\` : ${user.balance}VND💵\n`;
    });

    await bot.sendMessage(msg.chat.id, message, { parse_mode: "Markdown" });
});

bot.onText(/\/nhan10kfreeadmin/, async (msg) => {
    const userId = msg.from.id;
    const now = Date.now();
    const lastWorkTime = balanceDB[userId]?.lastWorkTime || 1;
    const elapsedTime = (now - lastWorkTime) / 1;
    if (elapsedTime < 300) { 
        await bot.sendMessage(msg.chat.id, `Bạn phải chờ ${300 - elapsedTime} giây nữa để làm việc tiếp!`);
        return;
    }
    balanceDB[userId] = balanceDB[userId] ? balanceDB[userId] + 10000 : 10000;
    balanceDB[userId].lastWorkTime = now;
    saveBalance();

    await bot.sendMessage(msg.chat.id, 'Ad tặng bạn code 10k ✅');
});

bot.onText(/\/(bann|unban) (\d+|@\w+) (.+)/, async (msg, match) => {
    const userId = msg.from.id;
    if (userId !== ADMIN_USER_ID) {
        await bot.sendMessage(msg.chat.id, 'Bạn phải là admin để sử dụng lệnh này!');
        return;
    }

    const isBan = match[1] === 'ban';
    const target = match[2];
    const reason = match[3];
    const targetId = parseInt(target.startsWith('@') ? target.slice(1) : target);
    const targetName = await getUserInfo(targetId);
    if (!targetName) {
        await bot.sendMessage(msg.chat.id, `Người dùng với ID ${targetId} không tồn tại!`);
        return;
    }
    if (isBan) {
        balanceDB[targetId] = undefined; 
        await bot.sendMessage(msg.chat.id, `${targetName} đã bị ban vĩnh viễn vì ${reason}`);
    } else {
        await bot.sendMessage(msg.chat.id, `${targetName} đã được unban`); 
    }
    saveBalance();
});

    bot.onText(/^\/(xx1) (tai|tài|xiu|xỉu) (\d+)$/, async (msg, match) => {
    const userId = msg.from.id;
    const [betTypeRaw, betAmount] = [match[2], parseInt(match[3])];
  let betamount ;
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  return randomNumber;
}

const randomSevenDigitNumber = generateRandomNumber();
console.log(randomSevenDigitNumber);
    const userBalance = balanceDB[userId] || 0;
        if (userBalance < betAmount) {
        await bot.sendMessage(msg.chat.id, `Bạn không đủ tiền để đặt cược ${betAmount}đ cho lệnh này ❌`);
        return;
    }
  if (betAmount < 0) {
        await bot.sendMessage(msg.chat.id, `Bạn không đủ tiền để đặt cược cho lệnh này ❌`);
        return;
  }
      if (10000000000000 < betAmount) {
        await bot.sendMessage(msg.chat.id, `Vui lòng cược dưới 1.000.000đ ❌`);
        return;
      }
  if (betAmount <=  999 ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng cược trên 1.000đ ❌`);
        return;
  }

    const isTaiBet = (betTypeRaw === 'tai' || betTypeRaw === 'tài');
    let diceResults = []; 

for(let i = 0; i < 3; i++) {
    const result = await bot.sendDice(msg.chat.id, {});
    diceResults.push(result.dice.value);
}

const isTai = diceResults.every(value => value >= 11);

    const betMessage = (isTaiBet) ? 'tài' : 'xỉu';


    let winAmount = 0;
console.log(result);
    let message = `┏━━━━━━━━━━━━━━━┓
┣ Nội dung cược: ${betMessage}\n`;
    if (isTai === isTaiBet) {
        winAmount = +betAmount;
        message += `┣ Kết quả: ${diceValue}
┣ Tiền đặt cược: ${betAmount}đ`;
    } else {
        winAmount = -betAmount;
        message += `┣ Kết quả: ${diceValue}
┣ Tiền đặt cược: ${betAmount}đ`;
    }

    balanceDB[userId] += winAmount;
    saveSodu();
    const userBalanceAfter = balanceDB[userId] || 0;
    message += `\n┣ Số dư còn lại: ${userBalanceAfter}đ
┣ MassageId: ${randomSevenDigitNumber}
┗━━━━━━━━━━━━━━━┛`;

    await bot.sendMessage(msg.chat.id, message);
});

bot.onText(/^\/(xx|cx)/, async (msg) => {
    const userId = msg.from.id;
    const command = msg.text.split(" ");
    if (command.length !== 3) {
        await bot.sendMessage(msg.chat.id, `Vui lòng sử dụng lệnh theo định dạng sau:

Tai: 11 - 18 ➤ 1.9

Xiu: 3 - 10 ➤ 1.9

Chan: 2 4 6 8 10 12 14 16 18 ➤ 1.9

Le: 3 5 7 9 11 13 15 17 ➤ 1.9

P1: 3 4 5 ➤ 2.8

P2: 6 7 8 ➤ 2.8 

P3: 9 10 11 ➤ 2.8 

1: 1 ➤ 3.2

2: 2 ➤ 3.2

3: 3 ➤ 3.2

4: 4 ➤ 3.2

5: 5 ➤ 3.2

6: 6 ➤ 3.2

➡️ Min 1.000đ Max 1.000.000đ

➡️ vd: /xx x 10000 /xx c 10000`);
        return;
    }

    const [betTypeRaw, betAmount] = [command[1], parseInt(command[2])];

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  return randomNumber;
}

const randomSevenDigitNumber = generateRandomNumber();
console.log(randomSevenDigitNumber);
    const userBalance = balanceDB[userId] || 0;

    if (userBalance < betAmount) {
        await bot.sendMessage(msg.chat.id, `Bạn không đủ tiền để đặt cược ❌`);
        return;
    } 
  if (10000000000000 < betAmount) {
        await bot.sendMessage(msg.chat.id, `Vui lòng cược dưới 1.000.000đ ❌`);
        return;
  }
  if (betAmount < 0) {
        await bot.sendMessage(msg.chat.id, `Bạn không đủ tiền để đặt cược cho lệnh này ❌`);
        return;
  }
  if (betAmount <=  999 ) {
        await
  bot.sendMessage(msg.chat.id, `Vui lòng cược trên 1.000đ ❌`);
        return;
  }
    let winAmount = 0;

    let message =
      `┏━━━━━━━━━━━━━━━┓
┣ Nội dung cược: ${betTypeRaw} \n`;
    switch (betTypeRaw) {
        case 't':
        case 'tài':
        case 'x':
        case 'xỉu':
            const isTaiBet = (betTypeRaw === 't' || betTypeRaw === 'tài');
    const result7 = await bot.sendDice(msg.chat.id, {});
    const diceValue7 = result7.dice.value;
    let totalDiceValue59 = diceValue7;
    let isTai = (totalDiceValue59 >= 4);
    const betMessage = (isTaiBet) ? 'tài' : 'xỉu';

    message += `┣ Kết quả: ${totalDiceValue59}\n`;
    message += `┣ Tiền đặt cược: ${betAmount}đ\n`;

    if (isTai === isTaiBet) {
        winAmount = betAmount * 0.9;
        message += `┣ Chiến Thắng ✅`;
    } else {
        winAmount = -betAmount;
        message += `┣ Thua Cuộc ❌`;
    }

            break;
        case 'c':
        case 'chẵn':
        case 'l':
        case 'lẻ':

const diceResult97 = await bot.sendDice(msg.chat.id, {});

const diceValue97 = diceResult97.dice.value;


let totalDiceValue6 = diceValue97;

let isEven = (totalDiceValue6 % 2 === 0);

const betType = (betTypeRaw === 'chan' || betTypeRaw === 'chẵn') ? 'chẵn' : 'lẻ';

message += `┣ Kết quả: ${totalDiceValue6} 
┣ Tiền đặt cược: ${betAmount}đ\n`;
if ((isEven && betType === 'chẵn') || (!isEven && betType === 'lẻ')) {
    winAmount = betAmount * 0.9;
    message += '┣ Chiến Thắng ✅';
} else {
    winAmount = -betAmount;
    message += '┣ Thua Cuộc ❌';
}

            break;     
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            const result2 = await bot.sendDice(msg.chat.id, {});
            const diceValue2 = result2.dice.value;
            const betNumber = parseInt(betTypeRaw);

            message +=`┣ Kết quả: ${diceValue2}
┣ Tiền đặt cược: ${betAmount}đ`;
            if (diceValue2 === betNumber) {
                winAmount = betAmount * 2.2;

                message += `
┣ Chiến Thắng ✅ `;
            } else {
                winAmount = -betAmount;
                message += `
┣ Thua Cuộc ❌`;
            }
            break;
        case 'p1':
            const result15 = await bot.sendDice(msg.chat.id, {});
const result16 = await bot.sendDice(msg.chat.id, {});
const result17 = await bot.sendDice(msg.chat.id, {});
const diceValue15 = result15.dice.value;
const diceValue16 = result16.dice.value;
const diceValue17 = result17.dice.value;
let totalDiceValue3 = diceValue15 + diceValue16 + diceValue17;
            const betP1 = [3, 4, 5];

            message += `┣ Kết quả: ${totalDiceValue3}
┣ Tiền đặt cược: ${betAmount}đ`;
            if (betP1.includes(totalDiceValue3)) {
                winAmount = betAmount * 1.7;
                message += `
┣ Chiến Thắng ✅`;
            } else {
                winAmount = -betAmount;
                message += `
┣ Thua Cuộc ❌`;
            }
            break;
        case 'p2':
            const result4 = await bot.sendDice(msg.chat.id, {});
            const result20 = await bot.sendDice(msg.chat.id, {});
const result21 = await bot.sendDice(msg.chat.id, {});
const result22 = await bot.sendDice(msg.chat.id, {});
const diceValue20 = result20.dice.value;
const diceValue21 = result21.dice.value;
const diceValue22 = result22.dice.value;
let totalDiceValue4 = diceValue20 + diceValue21 + diceValue22;
            const betP2 = [6, 7, 8];

            message += `┣ Kết quả: ${totalDiceValue4}
┣ Tiền đặt cược: ${betAmount}đ`;
            if (betP2.includes(totalDiceValue4)) {
                winAmount = betAmount * 1.7;
                message += `
┣ Chiến Thắng ✅`;
            } else {
                winAmount = -betAmount;
                message += `
┣ Thua Cuộc ❌`;
            }
            break;
        case 'p3':
            const result30 = await bot.sendDice(msg.chat.id, {});
const result31 = await bot.sendDice(msg.chat.id, {});
const result32 = await bot.sendDice(msg.chat.id, {});
const diceValue30 = result30.dice.value;
const diceValue31 = result31.dice.value;
const diceValue32 = result32.dice.value;
let totalDiceValue7 = diceValue30 + diceValue31 + diceValue32;
            const betP5 = [9, 10, 11];

            message += `┣ Kết quả: ${totalDiceValue7}
┣ Tiền đặt cược: ${betAmount}đ`;
            if (betP5.includes(totalDiceValue7)) {
                winAmount = betAmount * 1.7;
                message += `
┣ Chiến Thắng ✅`;
            } else {
                winAmount = -betAmount;
                message += `
┣ Thua Cuộc ❌`;
            }
            break;
        default:
            await bot.sendMessage(msg.chat.id, `Vui lòng sử dụng lệnh theo định dạng sau:

Tai: 11 - 18 ➤ 1.9

Xiu: 3 - 10 ➤ 1.9

Chan: 2 4 6 8 10 12 14 16 18 ➤ 1.9

Le: 3 5 7 9 11 13 15 17 ➤ 1.9

P1: 3 4 5 ➤ 2.8

P2: 6 7 8 ➤ 2.8 

P3: 9 10 11 ➤ 2.8 

1: 1 ➤ 3.2

2: 2 ➤ 3.2

3: 3 ➤ 3.2

4: 4 ➤ 3.2

5: 5 ➤ 3.2

6: 6 ➤ 3.2

➡️ Min 1.000đ Max 1.000.000đ

➡️ vd: /xx x 10000 /xx c 10000`);
            return;
    }
    balanceDB[userId] += winAmount;
    saveBalance();
    const userBalanceAfter = balanceDB[userId] || 0;
    message += `\n┣ Số dư hiện tại: ${userBalanceAfter}đ
┣ MassageId: ${randomSevenDigitNumber}
┗━━━━━━━━━━━━━━━┛`;

    await bot.sendMessage(msg.chat.id, message);
});

const ADMIN_USER_ID = admin; 
console.log('Đã Chạy Code\n Thành Công!!!!');
