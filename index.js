const TelegramBot = require('node-telegram-bot-api');

// Thay thế YOUR_TELEGRAM_BOT_TOKEN bằng token bot của bạn từ @BotFather
const token = '7806956489:AAGJJgtGWBubkWtSAPtpFUYkJNNe6M2S9cI';
const bot = new TelegramBot(token, {polling: true});

// Thiết lập Admin ID
const ADMIN_IDS = [
  { id: 7368506325, name: 'Admin 1' },
  { id: 5446541716, name: 'Admin 2' },
  { id: 6592490492, name: 'Admin 3' }
];

// Hàm kiểm tra quyền admin
function isAdmin(userId) {
  return ADMIN_IDS.some(admin => admin.id === userId);
}

// Lệnh /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeImageUrl = 'https://humornama.com/wp-content/uploads/2022/07/Welcome-Aboard-Meme-on-Spongebob-Squarepants.jpg';

  let adminInfo = "👥 **Danh sách Admin:**\n";
  ADMIN_IDS.forEach((admin) => {
    adminInfo += `- 👤 *${admin.name}* (ID: ${admin.id})\n`;
  });

  const welcomeMessage = `
🎉 *Chào mừng bạn đến với bot của chúng tôi!* 🎉
Chúng tôi rất vui khi có bạn ở đây! 

${adminInfo}

👉 Hãy sử dụng các lệnh để bắt đầu tương tác với bot.
- /thanhtoan: Xem thông tin thanh toán.
- /lenh: Xem danh sách lệnh hỗ trợ.

Hy vọng bạn có một trải nghiệm tuyệt vời! 😊
  `;

  bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
  bot.sendPhoto(chatId, welcomeImageUrl);
});

// Lệnh /chuyenkhoan
bot.onText(/\/chuyenkhoan/, (msg) => {
  const chatId = msg.chat.id;

  const paymentInstructions = `
💳 *Hướng dẫn chuyển khoản:*
Hiện tại nhóm chưa có thông tin chuyển khoản. Vui lòng kiểm tra lại sau!
`;

  const paymentImageUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/243c6e16-ace7-4101-af38-a8aa88d389bb/dfydir4-333f4823-2363-4c26-b736-d7194438200a.png/v1/fill/w_1192,h_670/surprised_black_guy_meme_by_weegeedoll_dfydir4-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjQzYzZlMTYtYWNlNy00MTAxLWFmMzgtYThhYTg4ZDM4OWJiXC9kZnlkaXI0LTMzM2Y0ODIzLTIzNjMtNGMyNi1iNzM2LWQ3MTk0NDM4MjAwYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WJoC8y8e0uPFQ9R5JNShCfXm80-0EC_OG-zaikNBccg';

  bot.sendMessage(chatId, paymentInstructions, { parse_mode: 'Markdown' });
  bot.sendPhoto(chatId, paymentImageUrl);
});


// Lệnh /lenh
bot.onText(/\/lenh/, (msg) => {
  const chatId = msg.chat.id;

  const commandList = `
📋 **Danh sách các lệnh:**

1. **/start** - Khởi động bot và hiển thị danh sách admin.
   - **Hướng dẫn:** Gõ lệnh này để bắt đầu tương tác với bot.

2. **/thanhtoan** - Hiển thị thông tin thanh toán.
   - **Hướng dẫn:** Gõ lệnh này để nhận thông tin về cách thức thanh toán.

3. **/thanhtoan** - Hướng tới trang web https://gachthe1s.com/.
   - **Hướng dẫn:** Sử dụng lệnh này để truy cập trang web chính thức.

4. **/kick [ID]** - Kick người dùng khỏi nhóm (chỉ admin).
   - **Hướng dẫn:** Sử dụng lệnh này cùng với ID của người dùng để loại bỏ họ khỏi nhóm. Ví dụ: /kick 123456789.

5. **/ban [ID]** - Ban người dùng khỏi nhóm (chỉ admin).
   - **Hướng dẫn:** Sử dụng lệnh này cùng với ID của người dùng để cấm họ tham gia nhóm. Ví dụ: /ban 123456789.

6. **/unban [ID]** - Bỏ ban người dùng (chỉ admin).
   - **Hướng dẫn:** Sử dụng lệnh này cùng với ID của người dùng để cho phép họ tham gia lại nhóm. Ví dụ: /unban 123456789.

7. **/add [ID]** - Thêm lại người dùng đã bị ban vào nhóm (chỉ admin).
   - **Hướng dẫn:** Sử dụng lệnh này cùng với ID của người dùng để mời họ quay lại nhóm. Ví dụ: /add 123456789.

8. **/id** - Lấy ID người dùng hoặc ID người dùng được tag.
   - **Hướng dẫn:** Gõ lệnh này để lấy ID của bạn hoặc của người dùng khác bằng cách tag họ. Ví dụ: /id @tênngười dùng.
  `;

  bot.sendMessage(chatId, commandList, { parse_mode: 'Markdown' });
});


// Lệnh /id (có thể tag tên người dùng với @)
bot.onText(/\/id (@\w+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id; // Lấy ID của người gửi
  const taggedUserName = match[1].trim(); // Tên người được tag (bao gồm @)

  // Khởi tạo phản hồi
  let responseMessage = `ID của bạn là: ${userId}\n`;

  // Kiểm tra nếu chat là nhóm
  if (msg.chat.type === 'group' || msg.chat.type === 'supergroup') {
    // Lấy danh sách admin
    bot.getChatAdministrators(chatId).then((admins) => {
      // Tìm kiếm người dùng được tag từ danh sách admin
      const taggedUser = admins.find(admin => `@${admin.user.username}` === taggedUserName);

      if (taggedUser) {
        responseMessage += `ID của người được tag là: ${taggedUser.user.id}`;
      } else {
        responseMessage += `Không tìm thấy người dùng với tên ${taggedUserName}.`;
      }

      // Gửi phản hồi
      bot.sendMessage(chatId, responseMessage);
    }).catch(err => {
      console.error(err);
      bot.sendMessage(chatId, "Đã xảy ra lỗi khi tìm kiếm người dùng.");
    });
  } else {
    responseMessage += "Lệnh này chỉ có thể được sử dụng trong nhóm.";
    bot.sendMessage(chatId, responseMessage);
  }
});
// ID của admin
const admins = [7368506325, 5446541716, 6592490492];

bot.onText(/\/adduser (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const usernameToInvite = match[1]; // Tên người dùng được chỉ định

  // Kiểm tra xem người gửi có phải là admin không
  if (!admins.includes(msg.from.id)) {
    return bot.sendMessage(chatId, "Bạn không có quyền sử dụng lệnh này.");
  }

  // Gửi link mời vào nhóm cho người dùng chỉ định
  const inviteLink = `https://web.telegram.org/a/#-1002339938423`; // Thay thế bằng link nhóm của bạn
  bot.sendMessage(chatId, `Bạn đã mời @${usernameToInvite} vào nhóm. Link mời: ${inviteLink}`);

  // Gửi link mời cho người dùng cụ thể (Nếu họ đã tương tác với bot)
  bot.sendMessage(usernameToInvite, `Bạn đã được mời vào nhóm! Nhấn vào link để tham gia: ${inviteLink}`)
    .catch(err => {
      console.error(`Không thể gửi tin nhắn cho ${usernameToInvite}:`, err);
    });
});

// Lệnh /ck
bot.onText(/\/thanhtoan/, (msg) => {
  const chatId = msg.chat.id;
  const webLink = "https://gachthe1s.com/";

  bot.sendMessage(chatId, `Truy cập vào trang web tại đây: ${webLink}`);
});

// Chào mừng thành viên mới
bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;
  const welcome = 'https://i.pinimg.com/originals/2a/91/d6/2a91d6687eca694d4227c62724a58077.png';

  newMembers.forEach((member) => {
    bot.sendMessage(chatId, `Chào mừng ${member.first_name} đã tham gia nhóm!`);
    bot.sendPhoto(chatId, welcome);
  });
});

// Tạm biệt thành viên
bot.on('left_chat_member', (msg) => {
  const chatId = msg.chat.id;
  const leftMember = msg.left_chat_member;
  const goodbye ='https://i.imgflip.com/4v7e3c.jpg';

  bot.sendMessage(chatId, `Tạm biệt ${leftMember.first_name}, chúc bạn mọi điều tốt lành!`);
  bot.sendPhoto(chatId, goodbye);
});

// Bot chào khi được thêm vào nhóm
bot.on('chat_join_request', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Xin chào! Bot đã được thêm vào nhóm, hãy sử dụng /start để xem danh sách admin và /thanhtoan để biết cách thức thanh toán.`);
});

// Lệnh /kick (chỉ admin)
bot.onText(/\/kick (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const targetId = match[1];

  if (!isAdmin(userId)) {
    bot.sendMessage(chatId, "Bạn không có quyền thực hiện lệnh này.");
    return;
  }

  bot.kickChatMember(chatId, targetId).then(() => {
    bot.sendMessage(chatId, `Người dùng với ID ${targetId} đã bị kick khỏi nhóm.`);
  }).catch(err => {
    bot.sendMessage(chatId, `Không thể kick người dùng: ${err.message}`);
  });
});

// Lệnh /ban (chỉ admin)
bot.onText(/\/ban (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const targetId = match[1];

  if (!isAdmin(userId)) {
    bot.sendMessage(chatId, "Bạn không có quyền thực hiện lệnh này.");
    return;
  }

  bot.kickChatMember(chatId, targetId, { until_date: 0 }).then(() => {
    bot.sendMessage(chatId, `Người dùng với ID ${targetId} đã bị ban khỏi nhóm.`);
  }).catch(err => {
    bot.sendMessage(chatId, `Không thể ban người dùng: ${err.message}`);
  });
});

// Lệnh /unban (chỉ admin)
bot.onText(/\/unban (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const targetId = match[1];

  if (!isAdmin(userId)) {
    bot.sendMessage(chatId, "Bạn không có quyền thực hiện lệnh này.");
    return;
  }

  bot.unbanChatMember(chatId, targetId).then(() => {
    bot.sendMessage(chatId, `Người dùng với ID ${targetId} đã được unban.`);
  }).catch(err => {
    bot.sendMessage(chatId, `Không thể unban người dùng: ${err.message}`);
  });
});

// Lệnh /add (chỉ admin)
bot.onText(/\/add (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const targetId = match[1];

  if (!isAdmin(userId)) {
    bot.sendMessage(chatId, "Bạn không có quyền thực hiện lệnh này.");
    return;
  }

  bot.unbanChatMember(chatId, targetId).then(() => {
    bot.sendMessage(chatId, `Người dùng với ID ${targetId} đã được thêm vào nhóm.`);
  }).catch(err => {
    bot.sendMessage(chatId, `Không thể thêm người dùng: ${err.message}`);
  });
});
