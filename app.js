/* ==========================================================================
   FinFlow v3.0 — Personal Finance Tracker | Multi-Language | Fully Working
   ========================================================================== */

// --- TRANSLATIONS --------------------------------------------------------
const TRANSLATIONS = {
  uz: {
    total_balance: "Jami balans",
    income: "Kirim",
    expense: "Chiqim",
    debts_1month: "Qarzlar — 1 Oy",
    give_to_me: "Menga beriladigan",
    i_give: "Men beradigan",
    add_income: "Kirim",
    add_expense: "Chiqim",
    debt: "Qarz",
    recent_txs: "So'nggi operatsiyalar",
    all: "Hammasi →",
    no_txs: "Operatsiyalar yo'q",
    start_hint: "Boshlash uchun kiring",
    expense_label: "Chiqim",
    income_label: "Kirim",
    new_expense: "Yangi chiqim",
    amount: "Summasi",
    category: "Turkum",
    date: "Sana",
    description: "Tavsif",
    save: "Saqlash",
    filter: "Filtr:",
    debt_info: "Muddati 1 oy.",
    add_debt: "Yangi qarz qo'shish",
    name: "Ism",
    debt_type: "Turi",
    active_debts: "🔴 Faol qarzlar",
    closed_debts: "✅ Yopilgan qarzlar",
    clear: "Tozalash",
    finance_efficiency: "📊 Moliyaviy samaradorlik",
    savings: "Jamg'arma",
    verdict_empty: "Ma'lumotlar yo'q",
    total_income: "Jami kirim",
    total_expense: "Jami chiqim",
    avg_per_day: "O'rtacha/kun",
    debt_load: "Qarz yuki",
    expense_breakdown: "Chiqim tarkibi",
    clear_all: "Barcha ma'lumotlarni o'chirish",
    clear_warning: "Bu amalni ortga qaytarib bo'lmaydi",
    delete: "O'chirish",
    category_budgets: "🎯 Oylik Budjet va Limitlar",
    set_limit: "+ Limit",
    set_budget_title: "🎯 Turkum Limitini Belgilash",
    monthly_limit: "Oylik Limit Summasi",
    over_budget: "Limitdan oshdi!",
    nav_home: "Bosh sahifa",
    nav_income_expense: "Kirim-Chiqim",
    nav_debts: "Qarzlar",
    nav_report: "Hisobot",
    conf_cancel: "Bekor qilish",
    conf_ok: "Ha",
    add_cat: "Turkum qo'shish",
    cat_name: "Nomi",
    cat_type: "Turi",
    cancel: "Bekor qilish",
    add: "Qo'shish",
    currency_picker: "Valyutani tanlash",
    amount_ph: "0",
    optional: "Ixtiyoriy",
    who: "Kimga/Kimdan",
    cat_name_ph: "Turkum nomi",
    all_categories: "Barcha turkumlar",
    gave_debt: "Berdim",
    took_debt: "Oldim",
    expense_cat: "Chiqim uchun",
    income_cat: "Kirim uchun",
    months_short: ['Yan','Fev','Mar','Apr','May','Iyun','Iyul','Avg','Sen','Okt','Noy','Dek'],
    months_header: ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'],
    cat_name_min: "Turkum nomi kamida 2 ta belgidan iborat bo'lishi kerak!",
    cat_exists: "Bu turkum allaqachon mavjud!",
    cat_added: '"{name}" turkumi qo\'shildi!',
    enter_amount: "To'g'ri summani kiriting!",
    select_category: "Turkum tanlang!",
    select_date: "Sana tanlang!",
    tx_saved: "Saqlandi: {amount}",
    delete_tx_title: "Operatsiyani o'chirish",
    delete_tx_desc: '"{category}" — {amount} o\'chiriladi. Bu amalni bekor qilib bo\'lmaydi.',
    tx_deleted: "Operatsiya o'chirildi",
    name_min: "Ism kamida 2 ta belgidan iborat bo'lishi kerak!",
    debt_added: "Qarz qo'shildi: {amount}",
    complete_debt_title: "Qarzni yopish",
    complete_debt_desc: "{person} — {amount} {label} deb belgilanadi. Tranzaksiya yozuvi avtomatik qo'shiladi.",
    returned_lend: "qaytardi",
    returned_borrow: "qaytardim",
    debt_completed: "{person} — qarz yopildi!",
    no_closed_debts: "Yopilgan qarzlar yo'q",
    clear_history_title: "Tarixni tozalash",
    clear_history_desc: "{count} ta yopilgan qarz tarixdan o'chiriladi.",
    history_cleared: "Tarix tozalandi",
    verdict_empty_desc: "Natijalarni ko'rish uchun ma'lumotlarni kiriting.",
    verdict_excellent: 'Ajoyib! Daromadingizning <strong style="color:var(--green)">{rate}%</strong> qismi jamg\'arildi. Moliyaviy holatingiz juda yaxshi!',
    verdict_good: 'Yaxshi! Daromadingizning <strong>{rate}%</strong> qismi jamg\'arildi. Tejamkorlikni oshirish mumkin.',
    verdict_warning: 'Ehtiyot bo\'ling! Faqat <strong>{rate}%</strong> qoldi. Chiqimlarni kamaytirish kerak.',
    verdict_danger: '<span style="color:var(--red);font-weight:800;">Xavfli holat!</span> Budjet minusda. Chiqim daromaddan <strong>{amount}</strong> ko\'p!',
    no_expense_data: "Chiqim ma'lumotlari yo'q",
    clear_all_title: "Barcha ma'lumotlarni o'chirish",
    clear_all_desc: "Barcha tranzaksiyalar, qarzlar va turkumlar o'chiriladi. Bu amalni qaytarib bo'lmaydi!",
    all_data_cleared: "Barcha ma'lumotlar tozalandi",
    days_left: "{days} kun qoldi",
    overdue: "Muddat o'tdi! ({days} kun)",
    urgent: "Shoshilinch! {days} kun qoldi",
    duration_limit: "Muddat: 1 oy ({days} kun)",
    active_debts_count: "{count} faol",
    income_txt: "Kirim",
    expense_txt: "Chiqim",
    no_active_debts: "Faol qarzlar yo'q",
    returned_by_me: "Men qaytardim",
    returned_to_me: "Menga qaytarildi",
    debt_closed_tx_title: "Qarz qaytarildi",
    debt_closed_tx_desc: "Qarz yopildi: {person}",
    no_desc: "Tavsif yo'q",
    close_btn: "Yopish",
    new_income_title: "Yangi Kirim",
    new_expense_title: "Yangi Chiqim",
    lend_label: "Berilgan (Menga qaytaradi)",
    borrow_label: "Olingan (Men qaytaraman)",
    lang_uz: "O'zbekcha",
    lang_kk: "Qozoqcha",
    lang_ru: "Ruscha",
    lang_en: "Inglizcha",
    lang_tr: "Turkcha",
    lang_ky: "Qirg'izcha",
    lang_tg: "Tojikcha",
    nav_ai: "AI",
    ai_title: "AI Moliya Yordamchisi",
    ai_sub: "Moliyaviy savollaringizga javob beradi",
    chip_balance: "💎 Balansim qanday?",
    chip_tips: "🎯 Tejamkorlik maslahati",
    chip_analysis: "📈 Chiqimlar tahlili",
    chip_debt: "💸 Qarzlar va To'lovlar",
    ai_placeholder: "Savolingizni yozing...",
    ai_thinking: "⏳ O'ylayapman...",
    ai_error: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
    ai_welcome: "Salom! Men sizning shaxsiy moliya yordamchingizman. Moliyaviy savollaringizni so'rang yoki tez savollar tugmalaridan foydalaning! ✨🧠",
    nav_subscriptions: "To'lovlar",
    subscriptions_title: "🔔 Doimiy To'lovlar va Ijara",
    add_subscription: "🔔 Yangi To'lov Qo'shish",
    add_sub_btn: "+ To'lov",
    total_monthly_committed: "Jami oylik majburiyat",
    paid_this_month: "Bu oy to'landi",
    my_recurring_payments: "📋 To'lovlar va Ijara Ro'yxati",
    sub_name: "To'lov nomi (masalan: Ijara, Internet)",
    due_day: "Oynining kuni (1-31)",
    icon_category: "Turkum / Belgisi",
    pay_now: "To'lash",
    status_paid: "To'landi ✅",
    status_pending: "Kutilmoqda",
    status_urgent: "Shoshilinch! ({days} kun)",
    sub_saved: "To'lov rejasi saqlandi!",
    sub_paid_msg: "{title} — {amount} to'landi va chiqimlarga qo'shildi!",
    delete_sub_title: "To'lovni o'chirish",
    delete_sub_desc: '"{title}" rejasi o\'chiriladi.',
    qr_title: "📱 FinFlow Mobile Connect",
    qr_scan_hint: "Telefon kamerangizni ushbu QR-kodga tuting va bir zumda oching!",
    copy: "Nusxalash",
    link_copied: "Link almashinuv xotirasiga nusxalandi! 📋",
    no_subscriptions: "Hozircha doimiy to'lovlar yo'q",
    every_month_day: "Har oyning {day}-kuni",
    ai_audit_btn: "✨ 🧠 AI Moliyaviy Audit",
    ai_chip_forecast: "💫 Oy oxirigacha chiqim prognozi",
    pwa_guide_title: "📲 PWA Mobil Ilova Sifatida O'rnatish:",
    sub_title_ph: "Uy ijarasi, Internet, Kommunal..."
  },
  kk: {
    total_balance: "Жалпы Баланс",
    income: "Кіріс",
    expense: "Шығыс",
    debts_1month: "Қарыздар — 1 Ай",
    give_to_me: "Маған берілетін",
    i_give: "Мен беретін",
    add_income: "Кіріс",
    add_expense: "Шығыс",
    debt: "Қарыз",
    recent_txs: "Соңғы операциялар",
    all: "Барлығы →",
    no_txs: "Операциялар жоқ",
    start_hint: "Бастау үшін өтіңіз",
    expense_label: "Шығыс",
    income_label: "Кіріс",
    new_expense: "Жаңа Шығыс",
    amount: "Сомасы",
    category: "Санат",
    date: "Күні",
    description: "Сипаттама",
    save: "Сақтау",
    filter: "Сүзгі:",
    debt_info: "Мерзім 1 ай.",
    add_debt: "Жаңа Қарыз Қосу",
    name: "Аты",
    debt_type: "Түрі",
    active_debts: "🔴 Белсенді Қарыздар",
    closed_debts: "✅ Жабылған Қарыздар",
    clear: "Тазалау",
    finance_efficiency: "📊 Қаржы Тиімділігі",
    savings: "Жинақ",
    verdict_empty: "Деректер жоқ",
    total_income: "Жалпы Кіріс",
    total_expense: "Жалпы Шығыс",
    avg_per_day: "Орташа/күн",
    debt_load: "Қарыз жүктемесі",
    expense_breakdown: "Шығыс құрылымы",
    clear_all: "Барлық деректерді тазалау",
    clear_warning: "Бұл әрекетті болдырмау мүмкін емес",
    delete: "Өшіру",
    category_budgets: "🎯 Санат Бюджеттері мен Лимиттер",
    set_limit: "+ Лимит",
    set_budget_title: "🎯 Санат Лимитин Белгілеу",
    monthly_limit: "Айлық Лимит Сомасы",
    over_budget: "Лимиттен асты!",
    nav_home: "Басты",
    nav_income_expense: "Кіріс-Шығыс",
    nav_debts: "Қарыздар",
    nav_report: "Есеп",
    conf_cancel: "Болдырмау",
    conf_ok: "Иә",
    add_cat: "Санат Қосу",
    cat_name: "Атауы",
    cat_type: "Түрі",
    cancel: "Болдырмау",
    add: "Қосу",
    currency_picker: "Валюта таңдау",
    amount_ph: "0",
    optional: "Қосымша",
    who: "Кім",
    cat_name_ph: "Санат атауы",
    all_categories: "Барлық санаттар",
    gave_debt: "Бердім",
    took_debt: "Алдым",
    expense_cat: "Шығыс үшін",
    income_cat: "Кіріс үшін",
    months_short: ['қаң','ақп','нау','сәу','мам','мау','шіл','там','қыр','қаз','қар','жел'],
    months_header: ['Қаң','Ақп','Нау','Сәу','Мам','Мау','Шіл','Там','Қыр','Қаз','Қар','Жел'],
    cat_name_min: "Санат атауы кемінде 2 символ болуы керек!",
    cat_exists: "Бұл санат бұрыннан бар!",
    cat_added: '"{name}" санаты қосылды!',
    enter_amount: "Дұрыс сомасын енгізіңіз!",
    select_category: "Санат таңдаңыз!",
    select_date: "Күнді таңдаңыз!",
    tx_saved: "Сақталды: {amount}",
    delete_tx_title: "Операцияны өшіру",
    delete_tx_desc: '"{category}" — {amount} өшіріледі. Бұл әрекетті болдырмау мүмкін емес.',
    tx_deleted: "Операция өшірілді",
    name_min: "Аты кемінде 2 символ болуы керек!",
    debt_added: "Қарыз қосылды: {amount}",
    complete_debt_title: "Қарызды жабу",
    complete_debt_desc: "{person} — {amount} {label} деп белгіленеді. Транзакция жазбасы автоматты қосылады.",
    returned_lend: "қайтарды",
    returned_borrow: "қайтардым",
    debt_completed: "{person} — қарыз жабылды!",
    no_closed_debts: "Жабылған қарыздар жоқ",
    clear_history_title: "Тарихты тазалау",
    clear_history_desc: "{count} жабылған қарыз тарихтан өшіріледі.",
    history_cleared: "Тарих тазаланды",
    verdict_empty_desc: "Нәтижелерді көру үшін деректер енгізіңіз.",
    verdict_excellent: 'Тамаша! Табысыңыздың <strong style="color:var(--green)">{rate}%</strong> жиналды. Қаржылық жағдайыңыз өте жақсы!',
    verdict_good: 'Жақсы! Табысыңыздың <strong>{rate}%</strong> жиналды. Үнемдеуді арттыруға болады.',
    verdict_warning: 'Абай болыңыз! Тек <strong>{rate}%</strong> қалды. Шығынды азайту керек.',
    verdict_danger: '<span style="color:var(--red);font-weight:800;">Қауіпті жағдай!</span> Бюджет минуста. Шығын табыстан <strong>{amount}</strong> артық!',
    no_expense_data: "Шығыс деректері жоқ",
    clear_all_title: "Барлық деректерді өшіру",
    clear_all_desc: "Барлық транзакциялар, қарыздар және санаттар жойылады. Бұл әрекетті болдырмау мүмкін емес!",
    all_data_cleared: "Барлық деректер тазаланды",
    days_left: "{days} күн қалды",
    overdue: "Мерзім өтті! ({days} күн)",
    urgent: "Шұғыл! {days} күн қалды",
    duration_limit: "Мерзім: 1 ай ({days} күн)",
    active_debts_count: "{count} белсенді",
    income_txt: "Кіріс",
    expense_txt: "Шығыс",
    no_active_debts: "Белсенді қарыздар жоқ",
    returned_by_me: "Мен қайтардым",
    returned_to_me: "Маған қайтарылды",
    debt_closed_tx_title: "Қарыз қайтарылды",
    debt_closed_tx_desc: "Қарыз жабылды: {person}",
    no_desc: "Сипаттама жоқ",
    close_btn: "Жабу",
    new_income_title: "Жаңа Кіріс",
    new_expense_title: "Жаңа Шығыс",
    lend_label: "Берілген (Маған қайтарады)",
    borrow_label: "Алынған (Мен қайтарамын)",
    lang_uz: "Өзбекше",
    lang_kk: "Қазақша",
    lang_ru: "Орысша",
    lang_en: "Ағылшынша",
    lang_tr: "Түрікше",
    lang_ky: "Қырғызша",
    lang_tg: "Тәжікше",
    nav_ai: "AI",
    ai_title: "AI Қаржы Көмекшісі",
    ai_sub: "Қаржылық сұрақтарыңызға жауап береді",
    chip_balance: "💰 Балансым қандай?",
    chip_tips: "💡 Үнемдеу кеңестері",
    chip_analysis: "📊 Шығыс талдауы",
    chip_debt: "🔴 Қарыздарым",
    ai_placeholder: "Сұрақ жазыңыз...",
    ai_thinking: "⏳ Ойланып жатырмын...",
    ai_error: "Қате пайда болды. Қайта көріңіз.",
    ai_welcome: "Сәлем! Мен сіздің жеке қаржы көмекшіңізмін. Қаржылық сұрақтарыңызды қойыңыз немесе жылдам сұрақтар түймелерін пайдаланыңыз! 🤖",
    nav_subscriptions: "Төлемдер",
    subscriptions_title: "🔔 Тұрақты Төлемдер мен Жалдау",
    add_subscription: "🔔 Жаңа Төлем Қосу",
    add_sub_btn: "+ Төлем",
    total_monthly_committed: "Жалпы айлық төлемдер",
    paid_this_month: "Осы айда төленді",
    my_recurring_payments: "📋 Төлемдер мен Жалдау Тізімі",
    sub_name: "Төлем атауы (мыс: Жалдау, Интернет)",
    due_day: "Айдың күні (1-31)",
    icon_category: "Санат / Белгі",
    pay_now: "Төлеу",
    status_paid: "Төленді ✅",
    status_pending: "Күтілуде",
    status_urgent: "Шұғыл! ({days} күн)",
    sub_saved: "Төлем жоспары сақталды!",
    sub_paid_msg: "{title} — {amount} төленді және шығыстарға қосылды!",
    delete_sub_title: "Төлемді өшіру",
    delete_sub_desc: '"{title}" жоспары өшіріледі.',
    qr_title: "📱 FinFlow Mobile Connect",
    qr_scan_hint: "Телефон камераңызды осы QR-кодқа бағыттаңыз және бірден ашыңыз!",
    copy: "Көшіру",
    link_copied: "Сілтеме буферге көшірілді! 📋",
    no_subscriptions: "Әзірше тұрақты төлемдер жоқ",
    every_month_day: "Әр айдың {day}-күні",
    ai_audit_btn: "⚡ 🤖 AI Қаржылық Аудит",
    ai_chip_forecast: "🔮 Ай соңына дейін шығыс болжамы",
    pwa_guide_title: "📲 PWA Мобильді Қолданба Ретинде Орнату:",
    sub_title_ph: "Үй жалдау, Интернет, Коммуналдық..."
  },
  ru: {
    total_balance: "Общий баланс",
    income: "Доходы",
    expense: "Расходы",
    debts_1month: "Долги — 1 Месяц",
    give_to_me: "Мне должны",
    i_give: "Я должен",
    add_income: "Доход",
    add_expense: "Расход",
    debt: "Долг",
    recent_txs: "Последние операции",
    all: "Все →",
    no_txs: "Нет операций",
    start_hint: "Перейдите для начала",
    expense_label: "Расход",
    income_label: "Доход",
    new_expense: "Новый расход",
    amount: "Сумма",
    category: "Категория",
    date: "Дата",
    description: "Описание",
    save: "Сохранить",
    filter: "Фильтр:",
    debt_info: "Срок 1 месяц.",
    add_debt: "Добавить новый долг",
    name: "Имя",
    debt_type: "Тип",
    active_debts: "🔴 Активные долги",
    closed_debts: "✅ Закрытые долги",
    clear: "Очистить",
    finance_efficiency: "📊 Эффективность финансов",
    savings: "Сбережения",
    verdict_empty: "Нет данных",
    total_income: "Общий доход",
    total_expense: "Общий расход",
    avg_per_day: "Среднее/день",
    debt_load: "Долговая нагрузка",
    expense_breakdown: "Структура расходов",
    clear_all: "Очистить все данные",
    clear_warning: "Это действие нельзя отменить",
    delete: "Удалить",
    nav_home: "Главная",
    nav_income_expense: "Доходы-Расходы",
    nav_debts: "Долги",
    nav_report: "Отчет",
    conf_cancel: "Отмена",
    conf_ok: "Да",
    add_cat: "Добавить категорию",
    cat_name: "Название",
    cat_type: "Тип",
    cancel: "Отмена",
    add: "Добавить",
    currency_picker: "Выбор валюты",
    amount_ph: "0",
    optional: "Необязательно",
    who: "Кто",
    cat_name_ph: "Название категории",
    all_categories: "Все категории",
    gave_debt: "Дал в долг",
    took_debt: "Взял в долг",
    expense_cat: "Для расходов",
    income_cat: "Для доходов",
    months_short: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
    months_header: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    cat_name_min: "Название категории должно быть не менее 2 символов!",
    cat_exists: "Эта категория уже существует!",
    cat_added: 'Категория "{name}" добавлена!',
    enter_amount: "Введите корректную сумму!",
    select_category: "Выберите категорию!",
    select_date: "Выберите дату!",
    tx_saved: "Сохранено: {amount}",
    delete_tx_title: "Удалить операцию",
    delete_tx_desc: '"{category}" — {amount} будет удалено. Это действие нельзя отменить.',
    tx_deleted: "Операция удалена",
    name_min: "Имя должно быть не менее 2 символов!",
    debt_added: "Долг добавлен: {amount}",
    complete_debt_title: "Закрыть долг",
    complete_debt_desc: "{person} — {amount} будет отмечен как {label}. Запись транзакции добавится автоматически.",
    returned_lend: "вернул(а)",
    returned_borrow: "вернул(а)",
    debt_completed: "{person} — долг закрыт!",
    no_closed_debts: "Нет закрытых долгов",
    clear_history_title: "Очистить историю",
    clear_history_desc: "{count} закрытых долгов будут удалены из истории.",
    history_cleared: "История очищена",
    verdict_empty_desc: "Введите данные для просмотра результатов.",
    verdict_excellent: 'Отлично! Сэкономлено <strong style="color:var(--green)">{rate}%</strong> вашего дохода. Ваше финансовое состояние прекрасное!',
    verdict_good: 'Хорошо! Сэкономлено <strong>{rate}%</strong> вашего дохода. Можно увеличить сбережения.',
    verdict_warning: 'Будьте осторожны! Осталось только <strong>{rate}%</strong>. Рекомендуется сократить расходы.',
    verdict_danger: '<span style="color:var(--red);font-weight:800;">Опасность!</span> Бюджет в минусе. Расходы превышают доходы на <strong>{amount}</strong>!',
    no_expense_data: "Нет данных о расходах",
    clear_all_title: "Удалить все данные",
    clear_all_desc: "Все транзакции, долги и категории будут удалены. Это действие необратимо!",
    all_data_cleared: "Все данные очищены",
    days_left: "осталось {days} дн.",
    overdue: "Просрочено! ({days} дн.)",
    urgent: "Срочно! осталось {days} дн.",
    duration_limit: "Срок: 1 мес ({days} дн.)",
    active_debts_count: "активных: {count}",
    income_txt: "Доход",
    expense_txt: "Расход",
    no_active_debts: "Нет активных долгов",
    returned_by_me: "Я вернул(а)",
    returned_to_me: "Мне вернули",
    debt_closed_tx_title: "Долг возвращен",
    debt_closed_tx_desc: "Долг закрыт: {person}",
    no_desc: "Нет описания",
    close_btn: "Закрыть",
    new_income_title: "Новый Доход",
    new_expense_title: "Новый Расход",
    lend_label: "Дал в долг (Мне вернут)",
    borrow_label: "Взял в долг (Я верну)",
    lang_uz: "Узбекский",
    lang_kk: "Казахский",
    lang_ru: "Русский",
    lang_en: "Английский",
    lang_tr: "Турецкий",
    lang_ky: "Киргизский",
    lang_tg: "Таджикский",
    nav_ai: "AI",
    ai_title: "AI Финансовый Советник",
    ai_sub: "Ответит на ваши финансовые вопросы",
    chip_balance: "💰 Каков мой баланс?",
    chip_tips: "💡 Советы по экономии",
    chip_analysis: "📊 Анализ расходов",
    chip_debt: "🔴 Мои долги",
    ai_placeholder: "Задайте вопрос...",
    ai_thinking: "⏳ Думаю...",
    ai_error: "Произошла ошибка. Попробуйте ещё раз.",
    ai_welcome: "Привет! Я ваш персональный финансовый советник. Задайте финансовый вопрос или используйте быстрые кнопки! 🤖",
    nav_subscriptions: "Платежи",
    subscriptions_title: "🔔 Регулярные Платежи и Аренда",
    add_subscription: "🔔 Добавить Новый Платеж",
    add_sub_btn: "+ Платеж",
    total_monthly_committed: "Всего ежемесячных платежей",
    paid_this_month: "Оплачено в этом месяце",
    my_recurring_payments: "📋 Список Платежей и Аренды",
    sub_name: "Название платежа (напр: Аренда, Интернет)",
    due_day: "День месяца (1-31)",
    icon_category: "Категория / Значок",
    pay_now: "Оплатить",
    status_paid: "Оплачено ✅",
    status_pending: "Ожидается",
    status_urgent: "Срочно! ({days} дн.)",
    sub_saved: "План платежа сохранен!",
    sub_paid_msg: "{title} — {amount} оплачено и добавлено в расходы!",
    delete_sub_title: "Удалить платеж",
    delete_sub_desc: 'План "{title}" будет удален.',
    qr_title: "📱 FinFlow Mobile Connect",
    qr_scan_hint: "Наведите камеру телефона на этот QR-код и откройте в один клик!",
    copy: "Копировать",
    link_copied: "Ссылка скопирована в буфер обмена! 📋",
    no_subscriptions: "Пока нет регулярных платежей",
    every_month_day: "{day}-го числа каждого месяца",
    ai_audit_btn: "⚡ 🤖 AI Финансовый Аудит",
    ai_chip_forecast: "🔮 Прогноз расходов до конца месяца",
    pwa_guide_title: "📲 Установить как PWA приложение:",
    sub_title_ph: "Аренда жилья, Интернет, Коммунальные..."
  },
  en: {
    total_balance: "Total Balance",
    income: "Income",
    expense: "Expense",
    debts_1month: "Debts — 1 Month",
    give_to_me: "Owed to me",
    i_give: "I owe",
    add_income: "Income",
    add_expense: "Expense",
    debt: "Debt",
    recent_txs: "Recent Transactions",
    all: "All →",
    no_txs: "No transactions",
    start_hint: "Go to start tracking",
    expense_label: "Expense",
    income_label: "Income",
    new_expense: "New Expense",
    amount: "Amount",
    category: "Category",
    date: "Date",
    description: "Description",
    save: "Save",
    filter: "Filter:",
    debt_info: "Term is 1 month.",
    add_debt: "Add New Debt",
    name: "Name",
    debt_type: "Type",
    active_debts: "🔴 Active Debts",
    closed_debts: "✅ Closed Debts",
    clear: "Clear",
    finance_efficiency: "📊 Financial Efficiency",
    savings: "Savings",
    verdict_empty: "No data",
    total_income: "Total Income",
    total_expense: "Total Expense",
    avg_per_day: "Average/day",
    debt_load: "Debt load",
    expense_breakdown: "Expense Breakdown",
    clear_all: "Clear all data",
    clear_warning: "This action cannot be undone",
    delete: "Delete",
    nav_home: "Home",
    nav_income_expense: "Income-Expense",
    nav_debts: "Debts",
    nav_report: "Report",
    conf_cancel: "Cancel",
    conf_ok: "Yes",
    add_cat: "Add Category",
    cat_name: "Name",
    cat_type: "Type",
    cancel: "Cancel",
    add: "Add",
    currency_picker: "Select Currency",
    amount_ph: "0",
    optional: "Optional",
    who: "Who",
    cat_name_ph: "Category name",
    all_categories: "All categories",
    gave_debt: "Lent",
    took_debt: "Borrowed",
    expense_cat: "For Expense",
    income_cat: "For Income",
    months_short: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    months_header: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    cat_name_min: "Category name must be at least 2 characters!",
    cat_exists: "This category already exists!",
    cat_added: 'Category "{name}" added!',
    enter_amount: "Please enter correct amount!",
    select_category: "Please select a category!",
    select_date: "Please select a date!",
    tx_saved: "Saved: {amount}",
    delete_tx_title: "Delete transaction",
    delete_tx_desc: '"{category}" — {amount} will be deleted. This action cannot be undone.',
    tx_deleted: "Transaction deleted",
    name_min: "Name must be at least 2 characters!",
    debt_added: "Debt added: {amount}",
    complete_debt_title: "Complete debt",
    complete_debt_desc: "{person} — {amount} will be marked as {label}. A transaction record will be added automatically.",
    returned_lend: "returned",
    returned_borrow: "returned",
    debt_completed: "{person} — debt completed!",
    no_closed_debts: "No closed debts",
    clear_history_title: "Clear history",
    clear_history_desc: "{count} closed debts will be removed from history.",
    history_cleared: "History cleared",
    verdict_empty_desc: "Enter data to see results.",
    verdict_excellent: 'Excellent! Saved <strong style="color:var(--green)">{rate}%</strong> of your income. Your financial health is great!',
    verdict_good: 'Good! Saved <strong>{rate}%</strong> of your income. You can increase savings.',
    verdict_warning: 'Be careful! Only <strong>{rate}%</strong> left. You should reduce expenses.',
    verdict_danger: '<span style="color:var(--red);font-weight:800;">Danger!</span> Budget in negative. Expenses exceed income by <strong>{amount}</strong>!',
    no_expense_data: "No expense data",
    clear_all_title: "Clear all data",
    clear_all_desc: "All transactions, debts and categories will be deleted. This cannot be undone!",
    all_data_cleared: "All data cleared",
    days_left: "{days} days left",
    overdue: "Overdue! ({days} days)",
    urgent: "Urgent! {days} days left",
    duration_limit: "Term: 1 month ({days} days)",
    active_debts_count: "{count} active",
    income_txt: "Income",
    expense_txt: "Expense",
    no_active_debts: "No active debts",
    returned_by_me: "I returned",
    returned_to_me: "Returned to me",
    debt_closed_tx_title: "Debt returned",
    debt_closed_tx_desc: "Debt closed: {person}",
    no_desc: "No description",
    close_btn: "Close",
    new_income_title: "New Income",
    new_expense_title: "New Expense",
    lend_label: "Lent (Owed to me)",
    borrow_label: "Borrowed (I owe)",
    lang_uz: "Uzbek",
    lang_kk: "Kazakh",
    lang_ru: "Russian",
    lang_en: "English",
    lang_tr: "Turkish",
    lang_ky: "Kyrgyz",
    lang_tg: "Tajik",
    nav_ai: "AI",
    ai_title: "AI Financial Advisor",
    ai_sub: "Answers your financial questions",
    chip_balance: "💰 What's my balance?",
    chip_tips: "💡 Saving tips",
    chip_analysis: "📊 Expense analysis",
    chip_debt: "🔴 My debts",
    ai_placeholder: "Type your question...",
    ai_thinking: "⏳ Thinking...",
    ai_error: "An error occurred. Please try again.",
    ai_welcome: "Hello! I'm your personal finance assistant. Ask any financial question or use the quick buttons! 🤖",
    nav_subscriptions: "Subscriptions",
    subscriptions_title: "🔔 Recurring Payments & Rent",
    add_subscription: "🔔 Add New Payment",
    add_sub_btn: "+ Payment",
    total_monthly_committed: "Total Monthly Committed",
    paid_this_month: "Paid This Month",
    my_recurring_payments: "📋 Recurring Payments & Rent List",
    sub_name: "Payment Name (e.g. Rent, Internet)",
    due_day: "Day of Month (1-31)",
    icon_category: "Category / Icon",
    pay_now: "Pay Now",
    status_paid: "Paid ✅",
    status_pending: "Pending",
    status_urgent: "Urgent! ({days} days)",
    sub_saved: "Payment plan saved!",
    sub_paid_msg: "{title} — {amount} paid and added to expenses!",
    delete_sub_title: "Delete payment",
    delete_sub_desc: 'Payment plan "{title}" will be deleted.',
    qr_title: "📱 FinFlow Mobile Connect",
    qr_scan_hint: "Point your phone camera at this QR code and open instantly!",
    copy: "Copy",
    link_copied: "Link copied to clipboard! 📋",
    no_subscriptions: "No recurring payments yet",
    every_month_day: "Day {day} of every month",
    ai_audit_btn: "⚡ 🤖 AI Financial Audit",
    ai_chip_forecast: "🔮 Expense forecast till month end",
    pwa_guide_title: "📲 Install as PWA Mobile App:",
    sub_title_ph: "House rent, Internet, Utilities..."
  },
  tr: {
    total_balance: "Toplam Bakiye",
    income: "Gelir",
    expense: "Gider",
    debts_1month: "Borçlar — 1 Ay",
    give_to_me: "Alacaklarım",
    i_give: "Borçlarım",
    add_income: "Gelir",
    add_expense: "Gider",
    debt: "Borç",
    recent_txs: "Son İşlemler",
    all: "Hepsi →",
    no_txs: "İşlem yok",
    start_hint: "Başlamak için ekleyin",
    expense_label: "Gider",
    income_label: "Gelir",
    new_expense: "Yeni Gider",
    amount: "Tutar",
    category: "Kategori",
    date: "Tarih",
    description: "Açıklama",
    save: "Kaydet",
    filter: "Filtre:",
    debt_info: "Vade 1 ay.",
    add_debt: "Yeni Borç Ekle",
    name: "İsim",
    debt_type: "Tür",
    active_debts: "🔴 Aktif Borçlar",
    closed_debts: "✅ Kapatılan Borçlar",
    clear: "Temizle",
    finance_efficiency: "📊 Finansal Verimlilik",
    savings: "Tasarruf",
    verdict_empty: "Veri yok",
    total_income: "Toplam Gelir",
    total_expense: "Toplam Gider",
    avg_per_day: "Ortalama/gün",
    debt_load: "Borç Yükü",
    expense_breakdown: "Gider Dağılımı",
    clear_all: "Tüm Verileri Temizle",
    clear_warning: "Bu işlem geri alınamaz",
    delete: "Sil",
    nav_home: "Ana Sayfa",
    nav_income_expense: "Gelir-Gider",
    nav_debts: "Borçlar",
    nav_report: "Rapor",
    conf_cancel: "İptal",
    conf_ok: "Evet",
    add_cat: "Kategori Ekle",
    cat_name: "Adı",
    cat_type: "Türü",
    cancel: "İptal",
    add: "Ekle",
    currency_picker: "Para Birimi Seç",
    amount_ph: "0",
    optional: "İsteğe bağlı",
    who: "Kime/Kimden",
    cat_name_ph: "Kategori adı",
    all_categories: "Tüm Kategoriler",
    gave_debt: "Verdim",
    took_debt: "Aldım",
    expense_cat: "Gider için",
    income_cat: "Gelir için",
    months_short: ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'],
    months_header: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
    cat_name_min: "Kategori adı en az 2 karakter olmalıdır!",
    cat_exists: "Bu kategori zaten mevcut!",
    cat_added: '"{name}" kategorisi eklendi!',
    enter_amount: "Lütfen geçerli bir tutar girin!",
    select_category: "Lütfen kategori seçin!",
    select_date: "Lütfen tarih seçin!",
    tx_saved: "Kaydedildi: {amount}",
    delete_tx_title: "İşlemi sil",
    delete_tx_desc: '"{category}" — {amount} silinecektir. Bu işlem geri alınamaz.',
    tx_deleted: "İşlem silindi",
    name_min: "İsim en az 2 karakter olmalıdır!",
    debt_added: "Borç eklendi: {amount}",
    complete_debt_title: "Borcu kapat",
    complete_debt_desc: "{person} — {amount} {label} olarak işaretlenecektir. İşlem kaydı otomatik olarak eklenecektir.",
    returned_lend: "iade etti",
    returned_borrow: "iade ettim",
    debt_completed: "{person} — borç kapatıldı!",
    no_closed_debts: "Kapatılan borç yok",
    clear_history_title: "Geçmişi temizle",
    clear_history_desc: "{count} kapatılan borç geçmişten silinecektir.",
    history_cleared: "Geçmiş temizlendi",
    verdict_empty_desc: "Sonuçları görmek için veri girin.",
    verdict_excellent: 'Harika! Gelirinizin <strong style="color:var(--green)">%{rate}</strong> kadarını tasarruf ettiniz. Finansal durumunuz mükemmel!',
    verdict_good: 'Güzel! Gelirinizin <strong>%{rate}</strong> kadarını tasarruf ettiniz. Tasarruflarınızı artırabilirsiniz.',
    verdict_warning: 'Dikkatli olun! Sadece <strong>%{rate}</strong> kaldı. Harcamalarınızı azaltmanız önerilir.',
    verdict_danger: '<span style="color:var(--red);font-weight:800;">Tehlike!</span> Bütçe ekside. Harcamalar gelirleri <strong>{amount}</strong> aşıyor!',
    no_expense_data: "Gider verisi yok",
    clear_all_title: "Tüm verileri sil",
    clear_all_desc: "Tüm işlemler, borçlar ve kategoriler silinecektir. Bu işlem geri alınamaz!",
    all_data_cleared: "Tüm veriler temizlendi",
    days_left: "{days} gün kaldı",
    overdue: "Gecikmiş! ({days} gün)",
    urgent: "Acil! {days} gün kaldı",
    duration_limit: "Vade: 1 ay ({days} gün)",
    active_debts_count: "{count} aktif",
    income_txt: "Gelir",
    expense_txt: "Gider",
    no_active_debts: "Aktif borç yok",
    returned_by_me: "İade ettim",
    returned_to_me: "Bana iade edildi",
    debt_closed_tx_title: "Borç iade edildi",
    debt_closed_tx_desc: "Borç kapatıldı: {person}",
    no_desc: "Açıklama yok",
    close_btn: "Kapat",
    new_income_title: "Yeni Gelir",
    new_expense_title: "Yeni Gider",
    lend_label: "Borç Verilen (Bana dönecek)",
    borrow_label: "Borç Alınan (Ben ödeyeceğim)",
    lang_uz: "Özbekçe",
    lang_kk: "Kazakça",
    lang_ru: "Rusça",
    lang_en: "İngilizce",
    lang_tr: "Türkçe",
    lang_ky: "Kırgızca",
    lang_tg: "Tacikçe",
    nav_ai: "AI",
    ai_title: "AI Finans Danışmanı",
    ai_sub: "Finansal sorularınızı yanıtlar",
    chip_balance: "💰 Bakiyem nedir?",
    chip_tips: "💡 Tasarruf ipuçları",
    chip_analysis: "📊 Gider analizi",
    chip_debt: "🔴 Borçlarım",
    ai_placeholder: "Sorunuzu yazın...",
    ai_thinking: "⏳ Düşünüyorum...",
    ai_error: "Bir hata oluştu. Lütfen tekrar deneyin.",
    ai_welcome: "Merhaba! Ben kişisel finans danışmanınızım. Finansal sorularınızı sorun veya hızlı butonları kullanın! 🤖",
    nav_subscriptions: "Ödemeler",
    subscriptions_title: "🔔 Düzenli Ödemeler ve Kira",
    add_subscription: "🔔 Yeni Ödeme Ekle",
    add_sub_btn: "+ Ödeme",
    total_monthly_committed: "Toplam aylık ödemeler",
    paid_this_month: "Bu ay ödenen",
    my_recurring_payments: "📋 Ödemeler ve Kira Listesi",
    sub_name: "Ödeme adı (ör: Kira, İnternet)",
    due_day: "Ayın günü (1-31)",
    icon_category: "Kategori / Simge",
    pay_now: "Öde",
    status_paid: "Ödendi ✅",
    status_pending: "Bekliyor",
    status_urgent: "Acil! ({days} gün)",
    sub_saved: "Ödeme planı kaydedildi!",
    sub_paid_msg: "{title} — {amount} ödendi ve giderlere eklendi!",
    delete_sub_title: "Ödemeyi sil",
    delete_sub_desc: '"{title}" planı silinecektir.',
    qr_title: "📱 FinFlow Mobile Connect",
    qr_scan_hint: "Telefon kameranızı bu QR koduna tutun ve anında açın!",
    copy: "Kopyala",
    link_copied: "Bağlantı panoya kopyalandı! 📋",
    no_subscriptions: "Henüz düzenli ödeme yok",
    every_month_day: "Her ayın {day}. günü",
    ai_audit_btn: "⚡ 🤖 AI Finansal Denetim",
    ai_chip_forecast: "🔮 Ay sonuna kadar gider tahmini",
    pwa_guide_title: "📲 PWA Mobil Uygulama Olarak Yükle:",
    sub_title_ph: "Ev kirası, İnternet, Faturalar..."
  },
  ky: {
    total_balance: "Жалпы баланс",
    income: "Киреше",
    expense: "Чыгыша",
    debts_1month: "Карыздар — 1 Ай",
    give_to_me: "Мага берилүүчү",
    i_give: "Мен бере турган",
    add_income: "Киреше",
    add_expense: "Чыгыша",
    debt: "Карыз",
    recent_txs: "Акыркы операциялар",
    all: "Бардыгы →",
    no_txs: "Операциялар жок",
    start_hint: "Баштоо үчүн кириңиз",
    expense_label: "Чыгыша",
    income_label: "Киреше",
    new_expense: "Жаңы чыгаша",
    amount: "Суммасы",
    category: "Категория",
    date: "Датасы",
    description: "Түшүндүрмө",
    save: "Сактоо",
    filter: "Чыпка:",
    debt_info: "Мөөнөтү 1 ай.",
    add_debt: "Жаңы карыз кошуу",
    name: "Аты",
    debt_type: "Түрү",
    active_debts: "🔴 Активдүү карыздар",
    closed_debts: "✅ Жабылган карыздар",
    clear: "Тазалоо",
    finance_efficiency: "📊 Финансылык натыйжалуулук",
    savings: "Топтом",
    verdict_empty: "Маалымат жок",
    total_income: "Жалпы киреше",
    total_expense: "Жалпы чыгыша",
    avg_per_day: "Орточо/күн",
    debt_load: "Карыз жүгү",
    expense_breakdown: "Чыгышалардын түзүмү",
    clear_all: "Бардык маалыматтарды тазалоо",
    clear_warning: "Бул аракетти жокко чыгаруу мүмкүн эмес",
    delete: "Өчүрүү",
    nav_home: "Башкы бет",
    nav_income_expense: "Киреше-Чыгыша",
    nav_debts: "Карыздар",
    nav_report: "Отчет",
    conf_cancel: "Жокко чыгаруу",
    conf_ok: "Ооба",
    add_cat: "Категория кошуу",
    cat_name: "Аталышы",
    cat_type: "Түрү",
    cancel: "Жокко чыгаруу",
    add: "Кошуу",
    currency_picker: "Валюта тандоо",
    amount_ph: "0",
    optional: "Ыктыярдуу",
    who: "Кимден/Кимге",
    cat_name_ph: "Категория аталышы",
    all_categories: "Бардык категориялар",
    gave_debt: "Бердим",
    took_debt: "Алдым",
    expense_cat: "Чыгыша үчүн",
    income_cat: "Киреше үчүн",
    months_short: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    months_header: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    cat_name_min: "Категория аталышы кем эмес 2 символ болушу керек!",
    cat_exists: "Бул категория мурунтан эле бар!",
    cat_added: '"{name}" категориясы кошулду!',
    enter_amount: "Туура сумманы киргизиңиз!",
    select_category: "Категория тандаңыз!",
    select_date: "Дата тандаңыз!",
    tx_saved: "Сакталды: {amount}",
    delete_tx_title: "Операцияны өчүрүү",
    delete_tx_desc: '"{category}" — {amount} өчүрүлөт. Бул аракетти жокко чыгаруу мүмкүн эмес.',
    tx_deleted: "Операция өчүрүлдү",
    name_min: "Аты кем эмес 2 символ болушу керек!",
    debt_added: "Карыз кошулду: {amount}",
    complete_debt_title: "Карызды жабуу",
    complete_debt_desc: "{person} — {amount} {label} деп белгиленет. Транзакция жазуусу автоматтык түрдө кошулат.",
    returned_lend: "кайтарды",
    returned_borrow: "кайтардым",
    debt_completed: "{person} — карыз жабылды!",
    no_closed_debts: "Жабылган карыздар жок",
    clear_history_title: "Тарыхты тазалоо",
    clear_history_desc: "{count} жабылган карыз тарыхтан өчүрүлөт.",
    history_cleared: "Тарых тазаланды",
    verdict_empty_desc: "Жыйынтыктарды көрүү үчүн маалымат киргизиңиз.",
    verdict_excellent: 'Укмуш! Кирешеңиздин <strong style="color:var(--green)">{rate}%</strong> топтой алдыңыз. Финансылык абалыңыз абдан жакшы!',
    verdict_good: 'Жакшы! Кирешеңиздин <strong>{rate}%</strong> топтолду. Үнөмдөөнү арттырса болот.',
    verdict_warning: 'Абайлаңыз! Болгону <strong>{rate}%</strong> калды. Чыгышаларды азайтуу керек.',
    verdict_danger: '<span style="color:var(--red);font-weight:800;">Коркунучтуу абал!</span> Бюджет минус. Чыгыша кирешеден <strong>{amount}</strong> көп!',
    no_expense_data: "Чыгыша маалыматы жок",
    clear_all_title: "Бардык маалыматтарды өчүрүү",
    clear_all_desc: "Бардык транзакциялар, карыздар жана категориялар өчүрүлөт. Бул аракетти артка кайтаруу мүмкүн эмес!",
    all_data_cleared: "Бардык маалыматтар тазаланды",
    days_left: "{days} күн калды",
    overdue: "Мөөнөтү өттү! ({days} күн)",
    urgent: "Шашылыш! {days} күн калды",
    duration_limit: "Мөөнөтү: 1 ай ({days} күн)",
    active_debts_count: "{count} активдүү",
    income_txt: "Киреше",
    expense_txt: "Чыгыша",
    no_active_debts: "Активдүү карыздар жок",
    returned_by_me: "Мен кайтардым",
    returned_to_me: "Мага кайтарылды",
    debt_closed_tx_title: "Карыз кайтарылды",
    debt_closed_tx_desc: "Карыз жабылды: {person}",
    no_desc: "Түшүндүрмө жок",
    close_btn: "Жабуу",
    new_income_title: "Жаңы Киреше",
    new_expense_title: "Жаңы Чыгыша",
    lend_label: "Берилген (Мага кайтарат)",
    borrow_label: "Алынган (Мен кайтарам)",
    lang_uz: "Өзбекче",
    lang_kk: "Казахша",
    lang_ru: "Орусча",
    lang_en: "Англисче",
    lang_tr: "Түркчө",
    lang_ky: "Кыргызча",
    lang_tg: "Тажикче",
    nav_ai: "AI",
    ai_title: "AI Каржы Жардамчысы",
    ai_sub: "Каржылык суроолоруңузга жооп берет",
    chip_balance: "💰 Балансым кандай?",
    chip_tips: "💡 Үнөмдөө кеңештери",
    chip_analysis: "📊 Чыгаша талдоо",
    chip_debt: "🔴 Карыздарым",
    ai_placeholder: "Суроо жазыңыз...",
    ai_thinking: "⏳ Ойлонуп жатам...",
    ai_error: "Ката болду. Кайра аракет кылыңыз.",
    ai_welcome: "Саламатсызбы! Мен сиздин жеке каржы жардамчыңызмын. Каржылык суроолоруңузду берүңүз же тез суроолор баскычтарын колдонуңуз! 🤖",
    nav_subscriptions: "Төлөмдөр",
    subscriptions_title: "🔔 Туруктуу Төлөмдөр жана Ижара",
    add_subscription: "🔔 Жаңы Төлөм Кошуу",
    add_sub_btn: "+ Төлөм",
    total_monthly_committed: "Жалпы айлык милдеттенме",
    paid_this_month: "Ушул айда төлөндү",
    my_recurring_payments: "📋 Төлөмдөр жана Ижара Тизмеси",
    sub_name: "Төлөм аталышы (мисалы: Ижара, Интернет)",
    due_day: "Айдын күнү (1-31)",
    icon_category: "Категория / Белгиси",
    pay_now: "Төлөө",
    status_paid: "Төлөндү ✅",
    status_pending: "Күтүлүүдө",
    status_urgent: "Шашылыш! ({days} күн)",
    sub_saved: "Төлөм планы сакталды!",
    sub_paid_msg: "{title} — {amount} төлөндү жана чыгашаларга кошулду!",
    delete_sub_title: "Төлөмдү өчүрүү",
    delete_sub_desc: '"{title}" планы өчүрүлөт.',
    qr_title: "📱 FinFlow Mobile Connect",
    qr_scan_hint: "Телефон камераңызды ушул QR-кодго каратыңыз жана заматта ачыңыз!",
    copy: "Көчүрүү",
    link_copied: "Шилтеме алмашуу буферине көчүрүлдү! 📋",
    no_subscriptions: "Азырынча туруктуу төлөмдөр жок",
    every_month_day: "Ар бир айдын {day}-күнү",
    ai_audit_btn: "⚡ 🤖 AI Финансылык Аудит",
    ai_chip_forecast: "🔮 Ай аягына чейин чыгыша болжолу",
    pwa_guide_title: "📲 PWA Мобилдик Тиркеме Сапатында Орнотуу:",
    sub_title_ph: "Үй ижарасы, Интернет, Коммуналдык..."
  },
  tg: {
    total_balance: "Баланси умумӣ",
    income: "Даромад",
    expense: "Хароҷот",
    debts_1month: "Қарзҳо — 1 Моҳ",
    give_to_me: "Ба ман дода мешавад",
    i_give: "Ман медиҳам",
    add_income: "Даромад",
    add_expense: "Хароҷот",
    debt: "Қарз",
    recent_txs: "Амалиётҳои охирин",
    all: "Ҳама →",
    no_txs: "Амалиётҳо нест",
    start_hint: "Барои оғоз ворид кунед",
    expense_label: "Хароҷот",
    income_label: "Даромад",
    new_expense: "Хароҷоти нав",
    amount: "Маблағ",
    category: "Категория",
    date: "Сана",
    description: "Тавсиф",
    save: "Зоҳир кардан",
    filter: "Филтр:",
    debt_info: "Мӯҳлати 1 моҳ.",
    add_debt: "Иловаи қарзи нав",
    name: "Ном",
    debt_type: "Намуд",
    active_debts: "🔴 Қарзҳои фаъол",
    closed_debts: "✅ Қарзҳои пӯшида",
    clear: "Тоза кардан",
    finance_efficiency: "📊 Самаранокии молиявӣ",
    savings: "Пасандоз",
    verdict_empty: "Маълумот нест",
    total_income: "Даромади умумӣ",
    total_expense: "Хароҷоти умумӣ",
    avg_per_day: "Миёна/Рӯз",
    debt_load: "Сарбории қарз",
    expense_breakdown: "Сохтори хароҷот",
    clear_all: "Тоза кардани ҳама маълумот",
    clear_warning: "Ин амалро бекор кардан мумкин нест",
    delete: "Нест кардан",
    nav_home: "Саҳифаи асосӣ",
    nav_income_expense: "Даромад-Хароҷот",
    nav_debts: "Қарзҳо",
    nav_report: "Ҳисобот",
    conf_cancel: "Бекор кардан",
    conf_ok: "Бале",
    add_cat: "Иловаи категория",
    cat_name: "Ном",
    cat_type: "Намуд",
    cancel: "Бекор кардан",
    add: "Илова кардан",
    currency_picker: "Интихоби асъор",
    amount_ph: "0",
    optional: "Ихтиёрӣ",
    who: "Аз ким/Ба ким",
    cat_name_ph: "Номи категория",
    all_categories: "Ҳамаи категорияҳо",
    gave_debt: "Додам",
    took_debt: "Гирифтам",
    expense_cat: "Барои хароҷот",
    income_cat: "Барои даромад",
    months_short: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    months_header: ['Январ','Феврал','Март','Апрел','Май','Июн','Июл','Август','Сентябр','Октябр','Ноябр','Декабр'],
    cat_name_min: "Номи категория бояд на камтар аз 2 рамз бошад!",
    cat_exists: "Ин категория аллакай мавҷуд аст!",
    cat_added: 'Категорияи "{name}" илова шуд!',
    enter_amount: "Маблағи дурустро ворид кунед!",
    select_category: "Категорияро интихоб кунед!",
    select_date: "Санаро интихоб кунед!",
    tx_saved: "Сабт шуд: {amount}",
    delete_tx_title: "Нест кардани амалиёт",
    delete_tx_desc: '"{category}" — {amount} нест карда мешавад. Ин амалро бекор кардан мумкин нест.',
    tx_deleted: "Амалиёт нест карда шуд",
    name_min: "Ном бояд на камтар аз 2 рамз бошад!",
    debt_added: "Қарз илова шуд: {amount}",
    complete_debt_title: "Пӯшидани қарз",
    complete_debt_desc: "{person} — {amount} ҳамчун {label} қайд карда мешавад. Сабти транзаксия ба таври худкор илова мешавад.",
    returned_lend: "баргардонид",
    returned_borrow: "баргардонидам",
    debt_completed: "{person} — қарз пӯшида шуд!",
    no_closed_debts: "Қарзҳои пӯшида нест",
    clear_history_title: "Тоза кардани таърих",
    clear_history_desc: "{count} қарзҳои пӯшида аз таърих нест карда мешаванд.",
    history_cleared: "Таърих тоза карда шуд",
    verdict_empty_desc: "Барои дидани натиҷаҳо маълумот ворид кунед.",
    verdict_excellent: 'Аъло! <strong style="color:var(--green)">{rate}%</strong>-и даромади шумо сарфа шуд. Вазъияти молиявии шумо хеле хуб аст!',
    verdict_good: 'Хуб! {rate}%-и даромади шумо сарфа шуд. Шумо метавонед пасандозро зиёд кунед.',
    verdict_warning: 'Эҳтиёт бошед! Танҳо <strong>{rate}%</strong> боқӣ монд. Тавсия дода мешавад хароҷотро кам кунед.',
    verdict_danger: '<span style="color:var(--red);font-weight:800;">Хатар!</span> Буҷет дар минус. Хароҷот аз даромад ба андозаи <strong>{amount}</strong> зиёд аст!',
    no_expense_data: "Маълумоти хароҷот нест",
    clear_all_title: "Нест кардани ҳама маълумот",
    clear_all_desc: "Ҳама транзаксияҳо, қарзҳо ва категорияҳо нест карда мешаванд. Ин амалро бекор карда намешавад!",
    all_data_cleared: "Ҳама маълумот тоза карда шуд",
    days_left: "{days} рӯз боқӣ монд",
    overdue: "Мӯҳлат гузашт! ({days} рӯз)",
    urgent: "Таъҷилӣ! {days} рӯз боқӣ монд",
    duration_limit: "Мӯҳлат: 1 моҳ ({days} рӯз)",
    active_debts_count: "{count} фаъол",
    income_txt: "Даромад",
    expense_txt: "Хароҷот",
    no_active_debts: "Қарзҳои фаъол нест",
    returned_by_me: "Ман баргардонидам",
    returned_to_me: "Ба ман баргардонида шуд",
    debt_closed_tx_title: "Қарз баргардонида шуд",
    debt_closed_tx_desc: "Қарз пӯшида шуд: {person}",
    no_desc: "Тавсиф нест",
    close_btn: "Пӯшидан",
    new_income_title: "Даромади нав",
    new_expense_title: "Хароҷоти нав",
    lend_label: "Қарз дода шуд (Ба ман бармегардонад)",
    borrow_label: "Қарз гирифта шуд (Ман бармегардонам)",
    lang_uz: "Ӯзбекӣ",
    lang_kk: "Қазоқӣ",
    lang_ru: "Русӣ",
    lang_en: "Англисӣ",
    lang_tr: "Туркӣ",
    lang_ky: "Қирғизӣ",
    lang_tg: "Тоҷикӣ",
    nav_ai: "AI",
    ai_title: "AI Маслиҳатгари Молиявӣ",
    ai_sub: "Ба саволҳои молиявии шумо ҷавоб медиҳад",
    chip_balance: "💰 Балансам чист?",
    chip_tips: "💡 Маслиҳатҳои сарфа",
    chip_analysis: "📊 Таҳлили хароҷот",
    chip_debt: "🔴 Қарзҳоям",
    ai_placeholder: "Савол нависед...",
    ai_thinking: "⏳ Фикр мекунам...",
    ai_error: "Хато рух дод. Лутфан дубора кӯшиш кунед.",
    ai_welcome: "Салом! Ман маслиҳатгари шахсии молиявии шумо ҳастам. Саволҳои молиявиатонро бипурсед ё аз тугмаҳои тез истифода баред! 🤖",
    nav_subscriptions: "Пардохтҳо",
    subscriptions_title: "🔔 Пардохтҳои Мунтазам ва Иҷора",
    add_subscription: "🔔 Иловаи Пардохти Нав",
    add_sub_btn: "+ Пардохт",
    total_monthly_committed: "Ҷамъи пардохтҳои моҳона",
    paid_this_month: "Дар ин моҳ пардохт шуд",
    my_recurring_payments: "📋 Рӯйхати Пардохтҳо ва Иҷора",
    sub_name: "Номи пардохт (мас: Иҷора, Интернет)",
    due_day: "Рӯзи моҳ (1-31)",
    icon_category: "Категория / Нишона",
    pay_now: "Пардохтан",
    status_paid: "Пардохт шуд ✅",
    status_pending: "Интизорӣ",
    status_urgent: "Таъҷилӣ! ({days} рӯз)",
    sub_saved: "Нақшаи пардохт сабт шуд!",
    sub_paid_msg: "{title} — {amount} пардохт шуд ва ба хароҷот илова шуд!",
    delete_sub_title: "Нест кардани пардохт",
    delete_sub_desc: 'Нақшаи "{title}" нест карда мешавад.',
    qr_title: "📱 FinFlow Mobile Connect",
    qr_scan_hint: "Камераи телефони худро ба ин коди QR нигаронед ва дар як сония кушоед!",
    copy: "Нусхабардорӣ",
    link_copied: "Истинод ба буфери мубодила нусхабардорӣ шуд! 📋",
    no_subscriptions: "Ҳоло пардохтҳои мунтазам нест",
    every_month_day: "Рӯзи {day}-уми ҳар моҳ",
    ai_audit_btn: "⚡ 🤖 AI Аудити Молиявӣ",
    ai_chip_forecast: "🔮 Пешгӯии хароҷот то охири моҳ",
    pwa_guide_title: "📲 Насб кардан ҳамчун барномаи PWA:",
    sub_title_ph: "Иҷораи хона, Интернет, Коммуналӣ..."
  }
};

const LANGUAGES = {
  kk: { name: "Қазақша", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'><rect width='100' height='60' fill='%2300b0e6'/><g fill='%23ffea00'><path d='M4 5h7v50H4zM4 11c6-6 13-6 13 0s-7 8-13 4M4 25c6-6 13-6 13 0s-7 8-13 4M4 39c6-6 13-6 13 0s-7 8-13 4'/><circle cx='55' cy='24' r='10'/><path d='M55 34c-8 0-18 4-25 9 8-3 17-2 25 3 8-5 17-6 25-3-7-5-17-9-25-9z'/></g><g stroke='%23ffea00' stroke-width='2' stroke-linecap='round'><line x1='55' y1='10' x2='55' y2='7'/><line x1='55' y1='38' x2='55' y2='41'/><line x1='41' y1='24' x2='38' y2='24'/><line x1='69' y1='24' x2='72' y2='24'/><line x1='45' y1='14' x2='43' y2='12'/><line x1='65' y1='34' x2='67' y2='36'/><line x1='45' y1='34' x2='43' y2='36'/><line x1='65' y1='14' x2='67' y2='12'/></g></svg>", code: "KZ" },
  uz: { name: "O'zbekcha", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250'><rect width='500' height='80' fill='%230099b5'/><rect y='80' width='500' height='5' fill='%23d52b1e'/><rect y='85' width='500' height='80' fill='%23ffffff'/><rect y='165' width='500' height='5' fill='%23d52b1e'/><rect y='170' width='500' height='80' fill='%231eb53a'/><circle cx='50' cy='40' r='18' fill='%23ffffff'/><circle cx='58' cy='40' r='16' fill='%230099b5'/></svg>", code: "UZ" },
  ru: { name: "Русский", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'><rect width='900' height='200' fill='%23ffffff'/><rect y='200' width='900' height='200' fill='%230039a6'/><rect y='400' width='900' height='200' fill='%23d52b1e'/></svg>", code: "RU" },
  en: { name: "English", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 741 390'><rect width='741' height='390' fill='%23b22234'/><path d='M0 60h741M0 120h741M0 180h741M0 240h741M0 300h741M0 360h741' stroke='%23fff' stroke-width='30'/><rect width='296' height='210' fill='%233c3b6e'/></svg>", code: "EN" },
  tr: { name: "Türkçe", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'><rect width='1200' height='800' fill='%23e30a17'/><circle cx='420' cy='400' r='200' fill='%23ffffff'/><circle cx='470' cy='400' r='160' fill='%23e30a17'/><polygon points='680,400 635,415 652,370 615,400 660,400' fill='%23ffffff'/></svg>", code: "TR" },
  ky: { name: "Кыргызча", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600'><rect width='1000' height='600' fill='%23e30a17'/><g transform='translate(500,300)'><circle r='120' fill='%23ffda00'/><circle r='95' fill='%23e30a17'/><circle r='70' fill='%23ffda00'/><path d='M-45,-45 L45,45 M-45,45 L45,-45 M-60,0 L60,0 M0,-60 L0,60' stroke='%23e30a17' stroke-width='10'/></g></svg>", code: "KY" },
  tg: { name: "Тоҷикӣ", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 700'><rect width='1400' height='200' fill='%23cc0000'/><rect y='200' width='1400' height='300' fill='%23ffffff'/><rect y='500' width='1400' height='200' fill='%2300cc00'/><g transform='translate(700,350)' fill='%23f6b40e'><path d='M-45,25 h90 v10 h-90 z M-35,15 l10,-30 l15,15 l10,-25 l10,25 l15,-15 l10,30 z'/><circle cx='0' cy='-48' r='7'/><circle cx='-25' cy='-42' r='6'/><circle cx='25' cy='-42' r='6'/><circle cx='-48' cy='-25' r='5'/><circle cx='48' cy='-25' r='5'/></g></svg>", code: "TG" }
};

const LANG_TO_CURRENCY = {
  kk: 'KZT',
  uz: 'UZS',
  ru: 'RUB',
  en: 'USD',
  tr: 'TRY',
  ky: 'KGS',
  tg: 'TJS'
};

const CURRENCIES = {
  KZT: { sym: "₸", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'><rect width='100' height='60' fill='%2300b0e6'/><g fill='%23ffea00'><path d='M4 5h7v50H4zM4 11c6-6 13-6 13 0s-7 8-13 4M4 25c6-6 13-6 13 0s-7 8-13 4M4 39c6-6 13-6 13 0s-7 8-13 4'/><circle cx='55' cy='24' r='10'/><path d='M55 34c-8 0-18 4-25 9 8-3 17-2 25 3 8-5 17-6 25-3-7-5-17-9-25-9z'/></g><g stroke='%23ffea00' stroke-width='2' stroke-linecap='round'><line x1='55' y1='10' x2='55' y2='7'/><line x1='55' y1='38' x2='55' y2='41'/><line x1='41' y1='24' x2='38' y2='24'/><line x1='69' y1='24' x2='72' y2='24'/><line x1='45' y1='14' x2='43' y2='12'/><line x1='65' y1='34' x2='67' y2='36'/><line x1='45' y1='34' x2='43' y2='36'/><line x1='65' y1='14' x2='67' y2='12'/></g></svg>", name: "Қазақ теңгесі (KZT)" },
  UZS: { sym: "soʻm", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250'><rect width='500' height='80' fill='%230099b5'/><rect y='80' width='500' height='5' fill='%23d52b1e'/><rect y='85' width='500' height='80' fill='%23ffffff'/><rect y='165' width='500' height='5' fill='%23d52b1e'/><rect y='170' width='500' height='80' fill='%231eb53a'/><circle cx='50' cy='40' r='18' fill='%23ffffff'/><circle cx='58' cy='40' r='16' fill='%230099b5'/></svg>", name: "O'zbek so'mi (UZS)" },
  RUB: { sym: "₽", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'><rect width='900' height='200' fill='%23ffffff'/><rect y='200' width='900' height='200' fill='%230039a6'/><rect y='400' width='900' height='200' fill='%23d52b1e'/></svg>", name: "Российский рубль (RUB)" },
  USD: { sym: "$", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 741 390'><rect width='741' height='390' fill='%23b22234'/><path d='M0 60h741M0 120h741M0 180h741M0 240h741M0 300h741M0 360h741' stroke='%23fff' stroke-width='30'/><rect width='296' height='210' fill='%233c3b6e'/></svg>", name: "US Dollar (USD)" },
  TRY: { sym: "₺", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'><rect width='1200' height='800' fill='%23e30a17'/><circle cx='420' cy='400' r='200' fill='%23ffffff'/><circle cx='470' cy='400' r='160' fill='%23e30a17'/><polygon points='680,400 635,415 652,370 615,400 660,400' fill='%23ffffff'/></svg>", name: "Türk Lirası (TRY)" },
  KGS: { sym: "сом", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600'><rect width='1000' height='600' fill='%23e30a17'/><g transform='translate(500,300)'><circle r='120' fill='%23ffda00'/><circle r='95' fill='%23e30a17'/><circle r='70' fill='%23ffda00'/><path d='M-45,-45 L45,45 M-45,45 L45,-45 M-60,0 L60,0 M0,-60 L0,60' stroke='%23e30a17' stroke-width='10'/></g></svg>", name: "Кыргыз сому (KGS)" },
  TJS: { sym: "смн", flag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 700'><rect width='1400' height='200' fill='%23cc0000'/><rect y='200' width='1400' height='300' fill='%23ffffff'/><rect y='500' width='1400' height='200' fill='%2300cc00'/><g transform='translate(700,350)' fill='%23f6b40e'><path d='M-45,25 h90 v10 h-90 z M-35,15 l10,-30 l15,15 l10,-25 l10,25 l15,-15 l10,30 z'/><circle cx='0' cy='-48' r='7'/><circle cx='-25' cy='-42' r='6'/><circle cx='25' cy='-42' r='6'/><circle cx='-48' cy='-25' r='5'/><circle cx='48' cy='-25' r='5'/></g></svg>", name: "Сомонии Тоҷикистон (TJS)" }
};

const DEFAULT_CATEGORIES = {
  uz: {
    income: ['Oylik ish haqi', 'Biznes', 'Mukofot', 'Investitsiya', 'Boshqa'],
    expense: ['Oziq-ovqat', 'Transport', 'Ijara', 'Kiyim-kechak', 'Ta\'lim', 'Tibbiyot', 'Ko\'ngilochar', 'Kommunal', 'Boshqa']
  },
  kk: {
    income: ['Жалақы', 'Бизнес', 'Сыйлық', 'Инвестиция', 'Басқа'],
    expense: ['Тамақ-ас', 'Көлік', 'Жалдау', 'Киім', 'Білім', 'Медицина', 'Ойын-сауық', 'Коммуналдық', 'Басқа']
  },
  ru: {
    income: ['Зарплата', 'Бизнес', 'Подарок', 'Инвестиции', 'Другое'],
    expense: ['Продукты', 'Транспорт', 'Аренда', 'Одежда', 'Обучение', 'Медицина', 'Развлечения', 'Коммунальные', 'Другое']
  },
  en: {
    income: ['Salary', 'Business', 'Gift', 'Investment', 'Other'],
    expense: ['Food', 'Transport', 'Rent', 'Clothing', 'Education', 'Medicine', 'Entertainment', 'Utilities', 'Other']
  },
  tr: {
    income: ['Maaş', 'İşyeri', 'Hediye', 'Yatırım', 'Diğer'],
    expense: ['Gıda', 'Ulaşım', 'Kira', 'Giyim', 'Eğitim', 'Sağlık', 'Eğlence', 'Faturalar', 'Diğer']
  },
  ky: {
    income: ['Айлык акы', 'Бизнес', 'Белек', 'Инвестиция', 'Башка'],
    expense: ['Тамак-аш', 'Транспорт', 'Ижара', 'Кийим', 'Билим алуу', 'Медицина', 'Көңүл ачуу', 'Коммуналдык', 'Башка']
  },
  tg: {
    income: ['Маош', 'Бизнес', 'Тӯҳфа', 'Сармоягузорӣ', 'Дигар'],
    expense: ['Хӯрокворӣ', 'Транспорт', 'Иҷора', 'Либос', 'Таҳсил', 'Тиббиёт', 'Дилхушӣ', 'Коммуналӣ', 'Дигар']
  }
};

// --- STATE ---------------------------------------------------------------
let state = {
  transactions: [],
  debts: [],
  categories: {
    income:  ['Жалақы', 'Бизнес', 'Сыйлық', 'Инвестиция', 'Басқа'],
    expense: ['Тамақ-ас', 'Көлік', 'Жалдау', 'Киім', 'Білім', 'Медицина', 'Ойын-сауық', 'Коммуналдық', 'Басқа']
  },
  currentTab: 'dashboard',
  currentTxType: 'expense',
  language: 'kk',
  currency: 'KZT'
};

const STORAGE_KEY = 'finflow_v7_kk_kz_final'; // Force final Kazakh default state refresh on phone


// --- PERSISTENCE & DATABASE SYNC -----------------------------------------
let lastServerSyncJson = '';

async function syncWithServerDatabase() {
  try {
    const resp = await fetch('/api/data', { method: 'GET', headers: { 'Cache-Control': 'no-cache' } });
    if (!resp.ok) return;
    const remoteData = await resp.json();
    if (!remoteData || remoteData.status === 'empty') return;
    
    const remoteJson = JSON.stringify(remoteData);
    if (remoteJson !== lastServerSyncJson && remoteJson !== JSON.stringify(state)) {
      lastServerSyncJson = remoteJson;
      state = {
        ...state,
        ...remoteData,
        currentTab: state.currentTab || 'dashboard',
        currentTxType: state.currentTxType || 'expense'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      renderAll();
    }
  } catch (e) {
    // Server offline or local fetch fallback
  }
}

async function saveStateToServer() {
  try {
    const jsonStr = JSON.stringify(state);
    lastServerSyncJson = jsonStr;
    await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStr
    });
  } catch (e) {
    // Offline local storage fallback
  }
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      state = {
        language: 'kk',
        currency: 'KZT',
        budgets: {},
        ...state,
        ...parsed,
        currentTab: 'dashboard',
        currentTxType: 'expense'
      };
    } else {
      state.language = 'kk';
      state.currency = 'KZT';
      state.budgets = {};
      state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES['kk']));
    }
    syncWithServerDatabase();
    if (!window._dbSyncInterval) {
      window._dbSyncInterval = setInterval(syncWithServerDatabase, 5000);
    }
  } catch (e) {
    console.warn('State load error, resetting.', e);
    resetToDefaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    saveStateToServer();
  } catch (e) {
    console.error('Save error:', e);
  }
}

function resetToDefaultState() {
  state = {
    transactions: [],
    debts: [],
    categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES['kk'])),
    budgets: {},
    currentTab: 'dashboard',
    currentTxType: 'expense',
    language: 'kk',
    currency: 'KZT'
  };
  saveState();
}

// --- TRANSLATION ENGINE --------------------------------------------------
function getMsg(key, params = {}) {
  const lang = state.language || 'kk';
  let msg = TRANSLATIONS[lang]?.[key] || TRANSLATIONS['kk']?.[key] || key;
  Object.keys(params).forEach(p => {
    msg = msg.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
  });
  return msg;
}

function translatePage() {
  // Translate elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = getMsg(key);
  });

  // Translate placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    el.setAttribute('placeholder', getMsg(key));
  });

  // Translate select options with data-i18n-opt
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    el.textContent = getMsg(key);
  });

  // Update language picker button display in header
  const curLang = LANGUAGES[state.language] || LANGUAGES.uz;
  const langBtnFlag = document.querySelector('.lang-btn-flag');
  const langBtnCode = document.querySelector('.lang-btn-code');
  if (langBtnFlag) {
    langBtnFlag.src = curLang.flag;
    langBtnFlag.alt = curLang.code + ' flag';
  }
  if (langBtnCode) langBtnCode.textContent = curLang.code;

  // Update currency display in header and inputs (use img src if img element, else text)
  const curCurr = CURRENCIES[state.currency] || CURRENCIES.UZS;
  document.querySelectorAll('.hcb-flag, .curr-flag').forEach(el => {
    if (el.tagName === 'IMG') {
      el.src = curCurr.flag;
    } else {
      // Replace span with img if still a span
      const img = document.createElement('img');
      img.className = el.className + ' flag-img';
      img.src = curCurr.flag;
      img.alt = state.currency + ' flag';
      el.replaceWith(img);
    }
  });
  document.querySelectorAll('.hcb-sym, .curr-sym').forEach(el => el.textContent = curCurr.sym);

  // Update dynamic page headers (like the form title)
  const formTitle = document.getElementById('form-title');
  if (formTitle) {
    formTitle.textContent = state.currentTxType === 'expense' ? getMsg('new_expense_title') : getMsg('new_income_title');
  }

  // Update document title and description
  document.title = "FinFlow — " + getMsg('nav_home');
}

function buildLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  if (!dropdown) return;
  dropdown.innerHTML = '';
  Object.keys(LANGUAGES).forEach(code => {
    const lang = LANGUAGES[code];
    const localName = getMsg('lang_' + code);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `lang-drop-item ${state.language === code ? 'active' : ''}`;
    btn.innerHTML = `
      <img class="drop-flag" src="${lang.flag}" alt="${lang.code} flag">
      <span class="drop-name">${localName}</span>
      <span class="drop-code">${lang.code}</span>
    `;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      changeLanguage(code);
    });
    dropdown.appendChild(btn);
  });
}

function buildLangGrid() {
  const grid = document.getElementById('lang-grid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.keys(LANGUAGES).forEach(code => {
    const lang = LANGUAGES[code];
    const localName = getMsg('lang_' + code);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `lang-picker-item ${state.language === code ? 'active' : ''}`;
    btn.innerHTML = `
      <img class="lang-flag flag-img" src="${lang.flag}" alt="${lang.code} flag">
      <div class="lang-text">
        <span class="lang-name">${localName}</span>
        <span class="lang-sub">${lang.name}</span>
      </div>
      <span class="lang-code-badge">${lang.code}</span>
    `;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      changeLanguage(code);
    });
    grid.appendChild(btn);
  });
}

function openLangDropdown() {
  const wrap = document.getElementById('lang-dropdown-wrap');
  const btn = document.getElementById('lang-picker-btn');
  if (!wrap) return;
  buildLangDropdown();
  wrap.classList.add('open');
  btn?.setAttribute('aria-expanded', 'true');
}

function closeLangDropdown() {
  const wrap = document.getElementById('lang-dropdown-wrap');
  const btn = document.getElementById('lang-picker-btn');
  if (!wrap) return;
  wrap.classList.remove('open');
  btn?.setAttribute('aria-expanded', 'false');
}

function toggleLangDropdown() {
  const wrap = document.getElementById('lang-dropdown-wrap');
  if (wrap?.classList.contains('open')) {
    closeLangDropdown();
  } else {
    openLangDropdown();
  }
}

function populateLanguageGrid() {
  buildLangDropdown();
  buildLangGrid();
}

function populateCurrencyGrid() {
  const grid = document.getElementById('currency-grid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.keys(CURRENCIES).forEach(code => {
    const curr = CURRENCIES[code];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `currency-picker-item ${state.currency === code ? 'active' : ''}`;
    btn.innerHTML = `
      <img class="curr-flag flag-img" src="${curr.flag}" alt="${code} flag">
      <div class="lang-text">
        <span class="lang-name">${curr.name}</span>
      </div>
      <span class="lang-code-badge">${curr.sym}</span>
    `;
    btn.addEventListener('click', () => {
      changeCurrency(code);
      document.getElementById('currency-modal').classList.add('hidden');
    });
    grid.appendChild(btn);
  });
}

function translateCategoriesAndTransactions(oldLang, newLang) {
  const oldDefaults = DEFAULT_CATEGORIES[oldLang] || DEFAULT_CATEGORIES['kk'];
  const newDefaults = DEFAULT_CATEGORIES[newLang] || DEFAULT_CATEGORIES['kk'];

  function mapCategory(catName, type) {
    // Check if it's the special debt closed category
    const oldDebtTitle = TRANSLATIONS[oldLang]?.debt_closed_tx_title || TRANSLATIONS['kk']?.debt_closed_tx_title;
    const newDebtTitle = TRANSLATIONS[newLang]?.debt_closed_tx_title || TRANSLATIONS['kk']?.debt_closed_tx_title;
    if (catName === oldDebtTitle) {
      return newDebtTitle;
    }
    for (const l of Object.keys(TRANSLATIONS)) {
      if (catName === TRANSLATIONS[l]?.debt_closed_tx_title) {
        return newDebtTitle;
      }
    }

    const oldCats = oldDefaults[type] || [];
    const newCats = newDefaults[type] || [];
    const idx = oldCats.indexOf(catName);
    if (idx !== -1 && newCats[idx]) {
      return newCats[idx];
    }
    for (const l of Object.keys(DEFAULT_CATEGORIES)) {
      const otherCats = DEFAULT_CATEGORIES[l][type] || [];
      const otherIdx = otherCats.indexOf(catName);
      if (otherIdx !== -1 && newCats[otherIdx]) {
        return newCats[otherIdx];
      }
    }
    return catName;
  }

  if (state.categories) {
    if (state.categories.income) {
      state.categories.income = state.categories.income.map(cat => mapCategory(cat, 'income'));
    }
    if (state.categories.expense) {
      state.categories.expense = state.categories.expense.map(cat => mapCategory(cat, 'expense'));
    }
  }

  if (state.transactions) {
    state.transactions.forEach(tx => {
      tx.category = mapCategory(tx.category, tx.type);
    });
  }
}

function changeLanguage(langCode) {
  if (!LANGUAGES[langCode]) return;
  const oldLang = state.language || 'uz';

  state.language = langCode;
  if (LANG_TO_CURRENCY[langCode]) {
    state.currency = LANG_TO_CURRENCY[langCode];
  }

  // Translate existing categories and transactions if data exists
  translateCategoriesAndTransactions(oldLang, langCode);

  // If no transactions yet, update categories to the defaults of the new language
  if (state.transactions.length === 0 && state.debts.length === 0) {
    state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES[langCode] || DEFAULT_CATEGORIES['uz']));
  }

  saveState();
  translatePage();
  populateCategorySelects();
  updateHeaderDate();
  renderAll();
  populateLanguageGrid();

  // Update AI chat screen language
  updateAIScreenLanguage();

  closeLangDropdown();
  document.getElementById('language-modal')?.classList.add('hidden');

  const successMsgs = {
    uz: "Til O'zbekchaga o'zgartirildi! 🇺🇿",
    kk: "Тіл Қазақшаға өзгертілді! 🇰🇿",
    ru: "Язык изменен на русский! 🇷🇺",
    en: "Language changed to English! 🇬🇧",
    tr: "Dil Türkçe olarak değiştirildi! 🇹🇷",
    ky: "Тил Кыргызчага өзгөртүлдү! 🇰🇬",
    tg: "Забон ба тоҷикӣ иваз карда шуд! 🇹🇯"
  };
  showToast(successMsgs[langCode] || "Til o'zgartirildi!", 'success');
}

function changeCurrency(currCode) {
  if (!CURRENCIES[currCode]) return;
  state.currency = currCode;
  saveState();
  translatePage();
  renderAll();
}

// --- FORMATTERS ----------------------------------------------------------
function formatCurrency(amount) {
  const num = Number(amount) || 0;
  const curr = CURRENCIES[state.currency] || CURRENCIES.UZS;
  if (state.currency === 'UZS') {
    return num.toLocaleString('uz-UZ') + ' ' + curr.sym;
  } else if (state.currency === 'KZT') {
    return num.toLocaleString('kk-KZ') + ' ' + curr.sym;
  } else if (state.currency === 'RUB') {
    return num.toLocaleString('ru-RU') + ' ' + curr.sym;
  } else if (state.currency === 'TRY') {
    return curr.sym + num.toLocaleString('tr-TR');
  } else if (state.currency === 'KGS') {
    return num.toLocaleString('ky-KG') + ' ' + curr.sym;
  } else if (state.currency === 'TJS') {
    return num.toLocaleString('tg-TJ') + ' ' + curr.sym;
  } else {
    return curr.sym + num.toLocaleString('en-US');
  }
}

function formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const months = getMsg('months_short');
  return `${d} ${months[parseInt(m,10)-1]} ${y}`;
}

function formatDateShort(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d}.${m}.${y}`;
}

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

// --- TOAST NOTIFICATION --------------------------------------------------
let toastTimer = null;
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const toastIcon = document.getElementById('toast-icon');
  if (!toast || !toastMsg) return;

  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  toast.className = `toast ${type}`;
  toastIcon.textContent = icons[type] || '✅';
  toastMsg.textContent = msg;

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// --- THEME TOGGLE (DAY / NIGHT) -------------------------------------------
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('finflow_theme', next);
}

// --- CONFIRM MODAL -------------------------------------------------------
let confirmCallback = null;
function showConfirm(title, desc, icon, onConfirm) {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-desc').textContent = desc;
  document.getElementById('confirm-icon-wrap').textContent = icon || '⚠️';
  confirmCallback = onConfirm;
  document.getElementById('confirm-modal').classList.remove('hidden');
}

// --- DOMContentLoaded ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  translatePage();

  // Theme (Day / Night — Kun / Tun)
  const savedTheme = localStorage.getItem('finflow_theme');
  let currentTheme = 'dark';
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    currentTheme = 'light';
  }
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Date & Real-time Live Clock (Auto-updates every 1 second)
  updateHeaderDate();
  setInterval(updateHeaderDate, 1000);

  // Default dates
  const today = getTodayStr();
  const txDate = document.getElementById('tx-date');
  const debtDate = document.getElementById('debt-date');
  if (txDate) txDate.value = today;
  if (debtDate) debtDate.value = today;

  // Categories
  populateCategorySelects();

  // Forms
  document.getElementById('tx-form')?.addEventListener('submit', handleTxSubmit);
  document.getElementById('debt-form')?.addEventListener('submit', handleDebtSubmit);
  document.getElementById('category-form')?.addEventListener('submit', handleCategorySubmit);

  // Theme toggle

  // Category modal
  const catModal = document.getElementById('category-modal');
  document.getElementById('btn-add-category-modal')?.addEventListener('click', () => {
    document.getElementById('new-category-type').value = state.currentTxType;
    catModal?.classList.remove('hidden');
  });
  document.getElementById('btn-close-category-modal')?.addEventListener('click', () => {
    catModal?.classList.add('hidden');
  });
  document.getElementById('btn-cancel-cat')?.addEventListener('click', () => {
    catModal?.classList.add('hidden');
  });
  catModal?.addEventListener('click', (e) => {
    if (e.target === catModal) catModal.classList.add('hidden');
  });

  // Confirm modal
  document.getElementById('confirm-ok-btn')?.addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    if (typeof confirmCallback === 'function') confirmCallback();
    confirmCallback = null;
  });
  document.getElementById('confirm-cancel-btn')?.addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    confirmCallback = null;
  });
  document.getElementById('confirm-modal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('confirm-modal')) {
      document.getElementById('confirm-modal').classList.add('hidden');
      confirmCallback = null;
    }
  });

  // Language picker button & modal handlers
  document.getElementById('lang-picker-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    populateLanguageGrid();
    document.getElementById('language-modal')?.classList.remove('hidden');
  });

  document.getElementById('btn-close-language-modal')?.addEventListener('click', () => {
    document.getElementById('language-modal')?.classList.add('hidden');
  });

  const langModal = document.getElementById('language-modal');
  langModal?.addEventListener('click', (e) => {
    if (e.target === langModal) langModal.classList.add('hidden');
  });

  // Close dropdown when clicking anywhere outside
  document.addEventListener('click', (e) => {
    const wrap = document.getElementById('lang-dropdown-wrap');
    if (wrap && !wrap.contains(e.target)) {
      closeLangDropdown();
    }
  });
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLangDropdown();
      document.getElementById('language-modal')?.classList.add('hidden');
    }
  });

  // Currency Modal Open/Close
  const currModal = document.getElementById('currency-modal');
  const openCurrBtns = ['header-currency-btn', 'open-curr-from-tx', 'open-curr-from-debt'];
  openCurrBtns.forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      populateCurrencyGrid();
      currModal?.classList.remove('hidden');
    });
  });
  document.getElementById('btn-close-currency-modal')?.addEventListener('click', () => {
    currModal?.classList.add('hidden');
  });
  currModal?.addEventListener('click', (e) => {
    if (e.target === currModal) currModal.classList.add('hidden');
  });

  // Render
  renderAll();

  // AI Chat input: Enter to send
  const aiInput = document.getElementById('ai-user-input');
  if (aiInput) {
    aiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAIMessage();
      }
    });
  }
});

// --- HEADER LIVE DATE & REAL-TIME CLOCK ----------------------------------
function updateHeaderDate() {
  const now = new Date();
  const months = getMsg('months_header');
  const el = document.getElementById('current-date');
  if (!el) return;

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  el.innerHTML = `
    <div class="date-top-row">${day} ${month} ${year}</div>
    <div class="time-sub-row"><span class="clock-icon">⏰</span> ${hh}:${mm}:${ss}</div>
  `;
}

// --- TAB SWITCHING & TX TYPE ---------------------------------------------
function switchTab(tabId) {
  state.currentTab = tabId;
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

  const activeScreen = document.getElementById(`screen-${tabId}`);
  const activeNavBtn = document.getElementById(`nav-${tabId}`);
  if (activeScreen) activeScreen.classList.add('active');
  if (activeNavBtn) activeNavBtn.classList.add('active');

  // Update header AI button highlight
  const headerAiBtn = document.getElementById('header-ai-btn');
  if (headerAiBtn) {
    if (tabId === 'ai') {
      headerAiBtn.classList.add('active-ai');
    } else {
      headerAiBtn.classList.remove('active-ai');
    }
  }

  if (tabId === 'ai') {
    setTimeout(initAIChat, 50);
  }
}

function setTxType(type) {
  state.currentTxType = type;
  const btnExpense = document.getElementById('btn-toggle-expense');
  const btnIncome = document.getElementById('btn-toggle-income');
  const formTitle = document.getElementById('form-title');

  if (type === 'expense') {
    btnExpense?.classList.add('active');
    btnIncome?.classList.remove('active');
    if (formTitle) formTitle.textContent = getMsg('new_expense_title');
  } else {
    btnIncome?.classList.add('active');
    btnExpense?.classList.remove('active');
    if (formTitle) formTitle.textContent = getMsg('new_income_title');
  }

  populateCategorySelects();
}

function completeDebt(id) {
  const debt = state.debts.find(d => d.id === id);
  if (!debt) return;

  const label = getMsg(debt.type === 'lend' ? 'returned_lend' : 'returned_borrow');
  showConfirm(
    getMsg('complete_debt_title'),
    getMsg('complete_debt_desc', { person: debt.person, amount: formatCurrency(debt.amount), label: label }),
    '✅',
    () => {
      debt.isCompleted = true;
      debt.completedAt = getTodayStr();

      const txType = debt.type === 'lend' ? 'income' : 'expense';
      const catName = getMsg('debt_closed_tx_title');

      if (!state.categories[txType].includes(catName)) {
        state.categories[txType].push(catName);
      }

      state.transactions.unshift({
        id: 'tx_debt_' + Date.now(),
        type: txType,
        amount: debt.amount,
        category: catName,
        date: getTodayStr(),
        description: getMsg('debt_closed_tx_desc', { person: debt.person }) + (debt.description ? ' (' + debt.description + ')' : ''),
        createdAt: new Date().toISOString()
      });

      saveState();
      renderAll();
      showToast(getMsg('debt_completed', { person: debt.person }), 'success');
    }
  );
}

function clearDebtHistory() {
  const count = state.debts.filter(d => d.isCompleted).length;
  if (count === 0) { showToast(getMsg('no_closed_debts'), 'info'); return; }

  showConfirm(
    getMsg('clear_history_title'),
    getMsg('clear_history_desc', { count: count }),
    '🗑️',
    () => {
      state.debts = state.debts.filter(d => !d.isCompleted);
      saveState();
      renderAll();
      showToast(getMsg('history_cleared'), 'info');
    }
  );
}

function handleTxSubmit(e) {
  e.preventDefault();

  const amountEl  = document.getElementById('tx-amount');
  const catEl     = document.getElementById('tx-category');
  const dateEl    = document.getElementById('tx-date');
  const descEl    = document.getElementById('tx-desc');

  const amount = parseFloat(amountEl?.value);
  const category = catEl?.value;
  const date = dateEl?.value;
  const description = descEl?.value.trim() || '';

  if (!amount || amount <= 0) { showToast(getMsg('enter_amount'), 'error'); amountEl?.focus(); return; }
  if (!category)              { showToast(getMsg('select_category'), 'error'); return; }
  if (!date)                  { showToast(getMsg('select_date'), 'error'); return; }

  const tx = {
    id: 'tx_' + Date.now() + '_' + Math.random().toString(36).substr(2,6),
    type: state.currentTxType,
    amount, category, date, description,
    createdAt: new Date().toISOString()
  };

  state.transactions.unshift(tx);
  saveState();

  if (amountEl) amountEl.value = '';
  if (descEl)   descEl.value = '';
  if (dateEl)   dateEl.value = getTodayStr();

  renderAll();
  showToast(getMsg('tx_saved', { amount: formatCurrency(amount) }), 'success');

  // Check budget limit alert
  if (state.currentTxType === 'expense' && state.budgets && state.budgets[category]) {
    const limit = state.budgets[category];
    const categorySpent = state.transactions
      .filter(t => t.type === 'expense' && t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);

    if (categorySpent > limit) {
      setTimeout(() => {
        showToast(`⚠️ "${category}" — limitdan oshdingiz! (${formatCurrency(categorySpent)} / ${formatCurrency(limit)})`, 'warning');
      }, 800);
    }
  }

  // Scroll to list
  document.getElementById('tx-scroll-list')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function deleteTransaction(id) {
  const tx = state.transactions.find(t => t.id === id);
  if (!tx) return;
  showConfirm(
    getMsg('delete_tx_title'),
    getMsg('delete_tx_desc', { category: tx.category, amount: formatCurrency(tx.amount) }),
    '🗑️',
    () => {
      state.transactions = state.transactions.filter(t => t.id !== id);
      saveState();
      renderAll();
      showToast(getMsg('tx_deleted'), 'info');
    }
  );
}



// --- RENDER ENGINE -------------------------------------------------------
function renderAll() {
  renderDashboard();
  renderTransactionsScreen();
  renderDebtsScreen();
  renderAnalyticsScreen();
  renderSubscriptions();
}

// DASHBOARD
function renderDashboard() {
  let totalIncome = 0;
  let totalExpense = 0;
  state.transactions.forEach(tx => {
    if (tx.type === 'income') totalIncome += tx.amount;
    else totalExpense += tx.amount;
  });

  const balance = totalIncome - totalExpense;
  const balEl = document.getElementById('total-balance');
  if (balEl) {
    balEl.textContent = formatCurrency(balance);
    balEl.style.color = '';
  }

  setEl('dashboard-income', formatCurrency(totalIncome));
  setEl('dashboard-expense', formatCurrency(totalExpense));

  // Dynamic Bank / Card Name by Country Currency
  const countryBanks = {
    KZT: "Kaspi.kz · Halyk Bank 💳",
    UZS: "Uzcard · Humo · Kapitalbank 💳",
    RUB: "Сбербанк · Т-Банк (Тинькофф) 💳",
    USD: "Visa · Mastercard · Apple Pay 💳",
    TRY: "Ziraat Bank · Garanti BBVA 💳",
    KGS: "MBank · Optima Bank 💳",
    TJS: "Alif Bank · DC Bank 💳",
    CNY: "Alipay · UnionPay 💳",
    EUR: "Revolut · N26 · SEPA 💳"
  };
  const bankNameEl = document.getElementById('hero-bank-name');
  if (bankNameEl) {
    bankNameEl.textContent = countryBanks[state.currency] || (state.currency + " Bank Cards 💳");
  }

  let toMe = 0, fromMe = 0, activeCount = 0;
  state.debts.forEach(d => {
    if (!d.isCompleted) {
      activeCount++;
      if (d.type === 'lend') toMe += d.amount;
      else fromMe += d.amount;
    }
  });

  setEl('debt-to-me', formatCurrency(toMe));
  setEl('debt-from-me', formatCurrency(fromMe));
  setEl('active-debts-badge', getMsg('active_debts_count', { count: activeCount }));

  // Recent transactions
  const list = document.getElementById('dashboard-tx-list');
  if (!list) return;
  list.innerHTML = '';

  const recent = state.transactions.slice(0, 5);
  if (recent.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
            <rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/>
          </svg>
        </div>
        <p>${getMsg('no_txs')}</p>
        <span>${getMsg('start_hint')}</span>
      </div>`;
  } else {
    recent.forEach(tx => list.appendChild(createTxItem(tx, false)));
  }
}

// TRANSACTIONS SCREEN
function renderTransactionsScreen() {
  const container = document.getElementById('tx-scroll-list');
  if (!container) return;

  const filterVal = document.getElementById('filter-category')?.value || 'all';
  let filtered = state.transactions;
  if (filterVal !== 'all') {
    filtered = filtered.filter(tx => tx.category === filterVal);
  }

  container.innerHTML = '';
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
            <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
          </svg>
        </div>
        <p>${getMsg('no_txs')}</p>
        <span>${getMsg('start_hint')}</span>
      </div>`;
    return;
  }
  filtered.forEach(tx => container.appendChild(createTxItem(tx, true)));
}

function createTxItem(tx, showDelete) {
  const isInc = tx.type === 'income';
  const item = document.createElement('div');
  item.className = 'tx-item';

  item.innerHTML = `
    <div class="tx-info">
      <div class="tx-cat-badge ${tx.type}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
          ${isInc ? '<path d="M12 19V5M5 12l7-7 7 7"/>' : '<path d="M12 5v14M19 12l-7 7-7-7"/>'}
        </svg>
      </div>
      <div class="tx-meta">
        <h4>${escHtml(tx.category)}</h4>
        <div class="tx-meta-sub">
          <span class="tx-date-badge">
            <svg class="tx-date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${formatDateDisplay(tx.date)}
          </span>
          ${tx.description ? `<span class="tx-desc-text">· ${escHtml(tx.description)}</span>` : ''}
        </div>
      </div>
    </div>
    <div class="tx-amount-side">
      <span class="tx-value ${tx.type}">${isInc ? '+' : '−'}${formatCurrency(tx.amount)}</span>
      ${showDelete ? `
        <button class="btn-delete-tx" onclick="deleteTransaction('${tx.id}')" title="${getMsg('delete')}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>` : ''}
    </div>`;
  return item;
}

function applyFilters() {
  renderTransactionsScreen();
}

// DEBTS SCREEN
function renderDebtsScreen() {
  const activeContainer  = document.getElementById('active-debts-list');
  const historyContainer = document.getElementById('history-debts-list');
  if (!activeContainer || !historyContainer) return;

  activeContainer.innerHTML = '';
  historyContainer.innerHTML = '';

  const active    = state.debts.filter(d => !d.isCompleted);
  const completed = state.debts.filter(d => d.isCompleted);

  // Active debts
  if (active.length === 0) {
    activeContainer.innerHTML = `<div class="empty-state"><p>${getMsg('no_active_debts')}</p></div>`;
  } else {
    active.forEach(d => {
      const card = document.createElement('div');
      card.className = 'debt-card';

      const start    = new Date(d.startDate);
      const due      = new Date(d.dueDate);
      const today    = new Date();
      today.setHours(0,0,0,0);

      const totalDays = Math.max(1, Math.round((due - start) / 86400000));
      const daysLeft  = Math.round((due - today) / 86400000);
      const elapsed   = Math.max(0, Math.round((today - start) / 86400000));
      const pct       = Math.min(100, Math.max(0, (elapsed / totalDays) * 100));

      let colorClass = 'green';
      let urgentClass = '';
      let countText = getMsg('days_left', { days: daysLeft });

      if (daysLeft < 0) {
        colorClass = 'red'; urgentClass = 'alert-urgent';
        countText = getMsg('overdue', { days: Math.abs(daysLeft) });
      } else if (daysLeft <= 3) {
        colorClass = 'red'; urgentClass = 'alert-urgent';
        countText = getMsg('urgent', { days: daysLeft });
      } else if (pct > 70) {
        colorClass = 'orange';
      }

      const isLend = d.type === 'lend';
      const typeLabel = isLend ? getMsg('lend_label') : getMsg('borrow_label');
      const typeClass = isLend ? 'lend' : 'borrow';

      card.innerHTML = `
        <div class="debt-card-row">
          <div class="debt-main-info">
            <span class="debt-name">${escHtml(d.person)}</span>
            <span class="debt-meta-date">Start: ${formatDateShort(d.startDate)} · End: ${formatDateShort(d.dueDate)}</span>
          </div>
          <div class="debt-status-side">
            <span class="debt-amt ${typeClass}">${formatCurrency(d.amount)}</span>
            <span class="debt-type-indicator ${typeClass}">${typeLabel}</span>
          </div>
        </div>
        <div class="debt-time-tracker">
          <div class="time-left-label">
            <span class="days-left ${urgentClass}">${countText}</span>
            <span class="total-duration">${getMsg('duration_limit', { days: totalDays })}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-fill ${colorClass}" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="debt-actions">
          <span class="debt-desc-text">${escHtml(d.description || getMsg('no_desc'))}</span>
          <button class="btn-complete-debt" onclick="completeDebt('${d.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${getMsg('close_btn')}</span>
          </button>
        </div>`;
      activeContainer.appendChild(card);
    });
  }

  // Completed debts
  if (completed.length === 0) {
    historyContainer.innerHTML = `<div class="empty-state"><p>${getMsg('no_closed_debts')}</p></div>`;
  } else {
    completed.forEach(d => {
      const card = document.createElement('div');
      card.className = 'debt-card completed';
      const typeClass = d.type === 'lend' ? 'lend' : 'borrow';
      const indText   = d.type === 'lend' ? getMsg('returned_to_me') : getMsg('returned_by_me');

      card.innerHTML = `
        <div class="debt-card-row">
          <div class="debt-main-info">
            <span class="debt-name">${escHtml(d.person)}</span>
            <span class="debt-meta-date">${formatDateShort(d.completedAt)}</span>
          </div>
          <div class="debt-status-side">
            <span class="debt-amt ${typeClass}">${formatCurrency(d.amount)}</span>
            <span class="completed-badge">${indText}</span>
          </div>
        </div>
        ${d.description ? `<div style="font-size:12px;color:var(--text-3);font-style:italic;margin-top:4px;">${escHtml(d.description)}</div>` : ''}`;
      historyContainer.appendChild(card);
    });
  }
}

// ANALYTICS SCREEN
function renderAnalyticsScreen() {
  let totalIncome = 0;
  let totalExpense = 0;
  const expBreak = {};

  state.transactions.forEach(tx => {
    if (tx.type === 'income') {
      totalIncome += tx.amount;
    } else {
      totalExpense += tx.amount;
      expBreak[tx.category] = (expBreak[tx.category] || 0) + tx.amount;
    }
  });

  const netSavings = totalIncome - totalExpense;
  let savingsRate = 0;
  if (totalIncome > 0) savingsRate = Math.round((netSavings / totalIncome) * 100);
  else if (totalExpense > 0) savingsRate = -100;

  const gaugeEl = document.getElementById('chart-gauge-fill');
  const pctEl   = document.getElementById('efficiency-percent');
  const visible = Math.max(0, Math.min(100, savingsRate));

  if (gaugeEl) {
    gaugeEl.setAttribute('stroke-dasharray', `${visible},100`);
    if (savingsRate > 50)      gaugeEl.style.stroke = 'var(--color-income)';
    else if (savingsRate >= 20) gaugeEl.style.stroke = 'var(--color-accent)';
    else if (savingsRate >= 0)  gaugeEl.style.stroke = 'var(--color-warning)';
    else                        gaugeEl.style.stroke = 'var(--color-expense)';
  }
  if (pctEl) pctEl.textContent = `${savingsRate}%`;

  const verdEl = document.getElementById('savings-rate-label');
  if (verdEl) {
    if (!totalIncome && !totalExpense) {
      verdEl.textContent = getMsg('verdict_empty_desc');
    } else if (savingsRate > 50) {
      verdEl.innerHTML = getMsg('verdict_excellent', { rate: savingsRate });
    } else if (savingsRate >= 20) {
      verdEl.innerHTML = getMsg('verdict_good', { rate: savingsRate });
    } else if (savingsRate >= 0) {
      verdEl.innerHTML = getMsg('verdict_warning', { rate: savingsRate });
    } else {
      verdEl.innerHTML = getMsg('verdict_danger', { amount: formatCurrency(Math.abs(netSavings)) });
    }
  }

  // Bars
  const barContainer = document.getElementById('category-bars-container');
  if (barContainer) {
    barContainer.innerHTML = '';
    if (totalExpense === 0) {
      barContainer.innerHTML = '<div class="empty-state" style="padding:12px 0"><p>' + getMsg('no_expense_data') + '</p></div>';
    } else {
      const sorted = Object.keys(expBreak).sort((a,b) => expBreak[b] - expBreak[a]);
      sorted.forEach(cat => {
        const amt = expBreak[cat];
        const pct = Math.round((amt / totalExpense) * 100);
        const item = document.createElement('div');
        item.className = 'chart-bar-item';
        item.innerHTML = `
          <div class="bar-info">
            <span class="cat-name">${escHtml(cat)} <span style="opacity:.5">${pct}%</span></span>
            <span class="cat-amt">${formatCurrency(amt)}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${pct}%"></div>
          </div>`;
        barContainer.appendChild(item);
      });
    }
  }

  // Stats
  setEl('stat-total-income',  formatCurrency(totalIncome));
  setEl('stat-total-expense', formatCurrency(totalExpense));

  const expTxs = state.transactions.filter(t => t.type === 'expense');
  const uniqueDates = [...new Set(expTxs.map(t => t.date))];
  const avg = expTxs.length ? Math.round(totalExpense / Math.max(1, uniqueDates.length)) : 0;
  setEl('stat-avg-expense', formatCurrency(avg));

  let borrowSum = 0;
  state.debts.forEach(d => { if (!d.isCompleted && d.type === 'borrow') borrowSum += d.amount; });
  setEl('stat-debt-ratio', formatCurrency(borrowSum));

  // Render Interactive Donut Chart & Category Budgets
  renderDonutChart(expBreak, totalExpense);
  renderBudgetsSection(expBreak);
}

// --- DONUT PIE CHART & BUDGET MANAGER -----------------------------------
const CHART_COLORS = [
  '#6366f1', '#a855f7', '#10b981', '#f43f5e', 
  '#f59e0b', '#06b6d4', '#ec4899', '#3b82f6', 
  '#84cc16', '#14b8a6', '#64748b'
];

function renderDonutChart(expBreak, totalExpense) {
  const svgGroup = document.getElementById('donut-segments');
  const legendEl = document.getElementById('donut-legend-container');
  const totalValEl = document.getElementById('donut-total-val');
  if (!svgGroup || !legendEl) return;

  svgGroup.innerHTML = '';
  legendEl.innerHTML = '';

  if (totalValEl) totalValEl.textContent = formatCurrency(totalExpense);

  const categories = Object.keys(expBreak).sort((a, b) => expBreak[b] - expBreak[a]);
  if (totalExpense === 0 || categories.length === 0) {
    return;
  }

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let accumulatedAngle = 0;

  categories.forEach((cat, idx) => {
    const amt = expBreak[cat];
    const pct = amt / totalExpense;
    const dashLength = pct * circumference;
    const color = CHART_COLORS[idx % CHART_COLORS.length];

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '100');
    circle.setAttribute('cy', '100');
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', '24');
    circle.setAttribute('stroke-dasharray', `${dashLength} ${circumference - dashLength}`);
    circle.setAttribute('stroke-dashoffset', `${-accumulatedAngle}`);
    circle.setAttribute('class', 'donut-segment');

    circle.addEventListener('mouseenter', () => {
      if (totalValEl) totalValEl.textContent = formatCurrency(amt);
    });
    circle.addEventListener('mouseleave', () => {
      if (totalValEl) totalValEl.textContent = formatCurrency(totalExpense);
    });

    svgGroup.appendChild(circle);

    const legendItem = document.createElement('div');
    legendItem.className = 'donut-legend-item';
    legendItem.innerHTML = `
      <span class="donut-legend-dot" style="background:${color};box-shadow:0 0 8px ${color}"></span>
      <span class="donut-legend-name">${escHtml(cat)}</span>
      <span class="donut-legend-pct">${Math.round(pct * 100)}%</span>
    `;
    legendEl.appendChild(legendItem);

    accumulatedAngle += dashLength;
  });
}

function renderBudgetsSection(expBreak = {}) {
  const container = document.getElementById('budget-list-container');
  if (!container) return;
  container.innerHTML = '';

  state.budgets = state.budgets || {};
  const categories = Object.keys(state.budgets);

  if (categories.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding:14px 0">
        <p>Лимитлар ҳали белгиланмаган</p>
        <span style="font-size:12px;color:var(--text-3)">"+ Лимит" тугмаси орқали харажат лимитини белгиланг</span>
      </div>`;
    return;
  }

  categories.forEach(cat => {
    const limit = state.budgets[cat];
    const spent = expBreak[cat] || 0;
    const pct = Math.round((spent / limit) * 100);

    let statusChipClass = 'chip-green';
    let statusText = `${pct}%`;
    let barColorClass = 'green';

    if (pct >= 100) {
      statusChipClass = 'chip-red';
      statusText = `⚠️ ${pct}% (${getMsg('over_budget') || 'Ошди!'})`;
      barColorClass = 'red';
    } else if (pct >= 75) {
      statusChipClass = 'chip-amber';
      statusText = `⚠️ ${pct}%`;
      barColorClass = 'amber';
    }

    const item = document.createElement('div');
    item.className = 'budget-item';
    item.innerHTML = `
      <div class="budget-item-header">
        <div class="budget-cat-info">
          <span class="budget-cat-name">${escHtml(cat)}</span>
          <span class="budget-spent-txt">${formatCurrency(spent)} / ${formatCurrency(limit)}</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip ${statusChipClass}">${statusText}</span>
          <button class="btn-delete-tx" onclick="deleteBudget('${escHtml(cat)}')" title="Remove limit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="bar-track">
        <div class="bar-fill ${barColorClass}" style="width:${Math.min(100, pct)}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

function openBudgetModal() {
  const modal = document.getElementById('budget-modal');
  const select = document.getElementById('budget-category-select');
  const currSym = document.getElementById('budget-curr-sym');
  if (!modal || !select) return;

  select.innerHTML = '';
  const expenseCats = state.categories?.expense || [];
  expenseCats.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });

  if (currSym) {
    const currKey = state.currency || 'KZT';
    currSym.textContent = CURRENCIES[currKey]?.sym || '₸';
  }

  modal.classList.remove('hidden');
}

function closeBudgetModal() {
  const modal = document.getElementById('budget-modal');
  if (modal) modal.classList.add('hidden');
}

function saveCategoryBudget(e) {
  e.preventDefault();
  const select = document.getElementById('budget-category-select');
  const input  = document.getElementById('budget-limit-input');
  if (!select || !input) return;

  const cat = select.value;
  const limit = parseFloat(input.value);
  if (!cat || isNaN(limit) || limit <= 0) {
    showToast(getMsg('enter_amount'), 'error');
    return;
  }

  state.budgets = state.budgets || {};
  state.budgets[cat] = limit;
  saveState();
  closeBudgetModal();
  input.value = '';
  renderAnalyticsScreen();
  showToast(`${cat}: ${formatCurrency(limit)} limit saqlandi`, 'success');
}

function deleteBudget(cat) {
  if (state.budgets && state.budgets[cat]) {
    delete state.budgets[cat];
    saveState();
    renderAnalyticsScreen();
    showToast(`${cat} limit ochirildi`, 'info');
  }
}

// --- RESET ---------------------------------------------------------------
function resetAppData() {
  showConfirm(
    getMsg('clear_all_title'),
    getMsg('clear_all_desc'),
    '☠️',
    () => {
      resetToDefaultState();
      renderAll();
      populateCategorySelects();
      switchTab('dashboard');
      showToast(getMsg('all_data_cleared'), 'info');
    }
  );
}

// --- UTILS ---------------------------------------------------------------
function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function populateCategorySelects() {
  const txCatSelect = document.getElementById('tx-category');
  if (txCatSelect) {
    txCatSelect.innerHTML = '';
    const cats = state.categories[state.currentTxType] || [];
    cats.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      txCatSelect.appendChild(opt);
    });
  }

  const filterCatSelect = document.getElementById('filter-category');
  if (filterCatSelect) {
    const currentFilterVal = filterCatSelect.value || 'all';
    filterCatSelect.innerHTML = `<option value="all" data-i18n-opt="all_categories">${getMsg('all_categories')}</option>`;
    
    const allCats = [...new Set([...state.categories.expense, ...state.categories.income])];
    allCats.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      filterCatSelect.appendChild(opt);
    });
    filterCatSelect.value = currentFilterVal;
  }
}

function handleCategorySubmit(e) {
  e.preventDefault();
  const nameEl = document.getElementById('new-category-name');
  const typeEl = document.getElementById('new-category-type');
  if (!nameEl || !typeEl) return;

  const name = nameEl.value.trim();
  const type = typeEl.value;

  if (name.length < 2) {
    showToast(getMsg('cat_name_min'), 'error');
    nameEl.focus();
    return;
  }

  if (state.categories[type].includes(name)) {
    showToast(getMsg('cat_exists'), 'error');
    nameEl.focus();
    return;
  }

  state.categories[type].push(name);
  saveState();
  
  nameEl.value = '';
  document.getElementById('category-modal')?.classList.add('hidden');
  
  populateCategorySelects();
  showToast(getMsg('cat_added', { name: name }), 'success');
}

function handleDebtSubmit(e) {
  e.preventDefault();
  const personEl = document.getElementById('debt-person');
  const amountEl = document.getElementById('debt-amount');
  const typeEl   = document.getElementById('debt-type');
  const dateEl   = document.getElementById('debt-date');
  const descEl   = document.getElementById('debt-desc');

  if (!personEl || !amountEl || !typeEl || !dateEl) return;

  const person = personEl.value.trim();
  const amount = parseFloat(amountEl.value);
  const type   = typeEl.value;
  const startDate = dateEl.value;
  const description = descEl?.value.trim() || '';

  if (person.length < 2) {
    showToast(getMsg('name_min'), 'error');
    personEl.focus();
    return;
  }

  if (!amount || amount <= 0) {
    showToast(getMsg('enter_amount'), 'error');
    amountEl.focus();
    return;
  }

  if (!startDate) {
    showToast(getMsg('select_date'), 'error');
    return;
  }

  const start = new Date(startDate);
  const due = new Date(start);
  due.setMonth(start.getMonth() + 1);
  const dueDate = due.toISOString().split('T')[0];

  const debt = {
    id: 'debt_' + Date.now() + '_' + Math.random().toString(36).substr(2,6),
    person,
    amount,
    type,
    startDate,
    dueDate,
    description,
    isCompleted: false,
    completedAt: null,
    createdAt: new Date().toISOString()
  };

  state.debts.unshift(debt);
  saveState();

  personEl.value = '';
  amountEl.value = '';
  if (descEl) descEl.value = '';
  dateEl.value = getTodayStr();

  renderAll();
  showToast(getMsg('debt_added', { amount: formatCurrency(amount) }), 'success');
}

// ============================================================
//  AI FINANCIAL ADVISOR CHAT
// ============================================================

// Gemini API key (free tier - gemini-1.5-flash)
const GEMINI_API_KEY = 'AIzaSyDemo_ReplaceWithYourKey'; // User should replace
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

let aiChatHistory = [];
let aiChatWelcomed = false;

function buildAIContext() {
  const totalIncome = state.transactions
    .filter(t => t.type === 'income')
    .reduce((s, t) => s + t.amount, 0);
  const totalExpense = state.transactions
    .filter(t => t.type === 'expense')
    .reduce((s, t) => s + t.amount, 0);
  const balance = totalIncome - totalExpense;

  // Category breakdown
  const catTotals = {};
  state.transactions.filter(t => t.type === 'expense').forEach(t => {
    catTotals[t.category] = (catTotals[t.category] || 0) + t.amount;
  });
  const catLines = Object.entries(catTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([cat, amt]) => `  • ${cat}: ${formatCurrency(amt)}`)
    .join('\n');

  // Active debts
  const activeDebts = state.debts.filter(d => !d.isCompleted);
  const debtLines = activeDebts
    .slice(0, 5)
    .map(d => `  • ${d.person} — ${formatCurrency(d.amount)} (${d.type === 'lend' ? 'lent' : 'borrowed'})`)
    .join('\n');

  // Subscriptions
  const subLines = (state.subscriptions || [])
    .slice(0, 5)
    .map(s => `  • ${s.title}: ${formatCurrency(s.amount)} (${s.isPaidThisMonth ? 'Paid' : 'Unpaid'})`)
    .join('\n');

  const currency = state.currency;
  const lang = state.language || 'kk';

  const langNames = {
    kk: "ҚАЗАҚ ТІЛІНДЕ (KAZAKH)",
    uz: "O'ZBEK TILIDA (UZBEK)",
    ru: "НА РУССКОМ ЯЗЫКЕ (RUSSIAN)",
    en: "STRICTLY IN ENGLISH",
    tr: "TÜRKÇE (TURKISH)",
    ky: "КЫРГЫЗ ТИЛИНДЕ (KYRGYZ)",
    tg: "БА ЗАБОНИ ТОҶИКӢ (TAJIK)"
  };

  const langPrompts = {
    kk: `СІЗ — FINFLOW ҚАРЖЫЛЫҚ АҚЫЛДЫ АССИСТЕНТІСІЗ (AI Financial Advisor).
АСА МАҢЫЗДЫ ТАЛАП: Пайдаланушы қай тілде жазса да, сіз ӘРҚАШАН ТЕК ҚАЗАҚ ТІЛІНДЕ (KAZAKH LANGUAGE) жауап беруіңіз керек! Ешқашан өзбек, орыс немесе басқа тілде жауап бермеңіз!
Сіз өте ақылды, кәсіби қаржылық сарапшысыз. Деректерді талдап, нақты, қысқа, құрылымдалған және өте пайдалы кеңес беріңіз.`,

    uz: `SIZ — FINFLOW MOLIYAVIY AQLLI YORDAMCHISIZ (AI Financial Advisor).
JUDA MUHIM TALAB: Foydalanuvchi qaysi tilda yozsa ham, siz HAR DOIM FAQAT O'ZBEK TILIDA (UZBEK LANGUAGE) javob berishingiz shart! Hech qachon boshqa tilda javob bermang!
Siz juda aqlli va professional moliyaviy sarapchisiz. Ma'lumotlarni tahlil qilib, aniq, qisqa va amaliy maslahatlar bering.`,

    ru: `ВЫ — ИНТЕЛЛЕКТУАЛЬНЫЙ ФИНАНСОВЫЙ КОНСУЛЬТАНТ FINFLOW (AI Financial Advisor).
КРАЙНЕ ВАЖНОЕ ТРЕБОВАНИЕ: На каком бы языке ни писал пользователь, вы ВСЕГДА ДОЛЖНЫ ОТВЕЧАТЬ СТРОГО НА РУССКОМ ЯЗЫКЕ!
Анализируйте данные пользователя и давайте мудрые, практичные и структурированные советы.`,

    en: `YOU ARE FINFLOW SMART AI FINANCIAL ADVISOR.
CRITICAL REQUIREMENT: REGARDLESS OF THE INPUT LANGUAGE, YOU MUST ALWAYS RESPOND STRICTLY IN ENGLISH!
Provide smart, highly structured, insightful, and practical financial guidance based on the user's data.`,

    tr: `SİZ FINFLOW AKILLI FİNANS DANIŞMANISINIZ (AI Financial Advisor).
ÇOK ÖNEMLİ KURAL: Kullanıcı hangi dilde yazarsa yazsın, siz HER ZAMAN SADECE TÜRKÇE cevap vermek zorundasınız!
Kullanıcının verilerini analiz edip akıllı, öz ve pratik finansal tavsiyeler verin.`,

    ky: `СИЗ FINFLOW КАРЖЫЛЫК АКЫЛДУУ АССИСТЕНТИСИЗ (AI Financial Advisor).
МААНИЛҮҮ ТАЛАП: Колдонуучу кайсы тилде жазбасын, сиз АР КАЧАН ТЕК ГАНА КЫРГЫЗ ТИЛИНДЕ жооп беришиңиз керек!
Акылдуу, так жана пайдалуу каржылык кеңеш бериңиз.`,

    tg: `ШУМО ЁРДАМЧИИ МОЛИЯВИИ ИНТЕЛЛЕКТУАЛИИ FINFLOW ҲАСТЕД (AI Financial Advisor).
ТАЛАБОТИ ХЕЛЕ МУҲИМ: Корбар бо кадом забон нанависад, шумо ҲАМЕША ТАНҲО БА ЗАБОНИ ТОҶИКӢ ҷавоб диҳед!
Маълумотро таҳлил карда, маслиҳатҳои оқилона ва амалӣ диҳед.`
  };

  const selectedPrompt = langPrompts[lang] || langPrompts['kk'];

  return `${selectedPrompt}

📊 Financial Snapshot:
- Currency: ${currency}
- Total Income: ${formatCurrency(totalIncome)}
- Total Expenses: ${formatCurrency(totalExpense)}
- Net Balance: ${formatCurrency(balance)}
- Savings Rate: ${totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0}%
- Top Expense Categories:
${catLines || '  (none)'}
- Active Debts:
${debtLines || '  (none)'}
- Recurring Payments:
${subLines || '  (none)'}

Mandate: Respond STRICTLY IN ${langNames[lang] || 'KAZAKH'}. Format responses beautifully with bold headers, emojis, and bullet points.`;
}

function runAIFinancialAudit() {
  let totalIncome = 0;
  let totalExpense = 0;
  state.transactions.forEach(tx => {
    if (tx.type === 'income') totalIncome += tx.amount;
    else totalExpense += tx.amount;
  });

  const balance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0;
  const activeDebts = state.debts.filter(d => !d.isCompleted);
  let toMe = 0, fromMe = 0;
  activeDebts.forEach(d => {
    if (d.type === 'lend') toMe += d.amount;
    else fromMe += d.amount;
  });

  let subTotal = 0;
  if (state.subscriptions) {
    state.subscriptions.forEach(s => subTotal += (Number(s.amount) || 0));
  }

  let auditEmoji = '🟢';
  if (savingsRate < 10 && balance > 0) {
    auditEmoji = '🟡';
  } else if (balance < 0) {
    auditEmoji = '🔴';
  }

  const lang = state.language || 'kk';

  const auditTemplates = {
    kk: `📊 **AI Қаржылық Экспресс-Аудит Есебі** ${auditEmoji}

• **Ағымдағы Баланс:** ${formatCurrency(balance)}
• **Жалпы Кіріс:** ${formatCurrency(totalIncome)}
• **Жалпы Шығыс:** ${formatCurrency(totalExpense)}
• **Жинақ Көрсеткіші:** ${savingsRate}%
• **Айлық Тұрақты Төлемдер:** ${formatCurrency(subTotal)}
• **Алынған Қарыздар:** ${formatCurrency(fromMe)}

💡 **AI Ұсынысы:**
1. ${savingsRate > 20 ? 'Тамаша нәтиже! Жинақталған қаражатты инвестицияға немесе резервтік қорға бағыттау ұсынылады.' : 'Әр айлық кірістің 15-20% бөлігін алдын ала резервке қоюды әдетке айналдырыңыз.'}
2. ${subTotal > 0 ? `Айлық тұрақты төлемдеріңіз (${formatCurrency(subTotal)}) жалпы шығыстың елеулі бөлігін құрайды.` : 'Тұрақты төлемдеріңізді реттеп бақылап отырыңыз.'}
3. ${fromMe > 0 ? `Алынған қарыздарыңызды (${formatCurrency(fromMe)}) бірінші кезекте жабу тиімді.` : 'Қарыз жүктемеңіз жоқ — бұл қаржылық еркіндігіңізді арттырады!'}`,

    uz: `📊 **AI Moliyaviy Ekspress-Audit Hisoboti** ${auditEmoji}

• **Joriy Balans:** ${formatCurrency(balance)}
• **Jami Kirim:** ${formatCurrency(totalIncome)}
• **Jami Chiqim:** ${formatCurrency(totalExpense)}
• **Jamg'arma ko'rsatkichi:** ${savingsRate}%
• **Oylik Doimiy To'lovlar:** ${formatCurrency(subTotal)}
• **Olingan Qarzlar:** ${formatCurrency(fromMe)}

💡 **AI Tavsiyasi:**
1. ${savingsRate > 20 ? 'Ajoyib natija! Jamg\'arilgan pulni investitsiya qilish yoki zaxira fondiga o\'tkazish tavsiya etiladi.' : 'Har oylik chiqimlarning 15-20% qismini oldindan zaxiraga olib qo\'yishni odat qiling.'}
2. ${subTotal > 0 ? `Oylik doimiy to'lovlargiz (${formatCurrency(subTotal)}) umumiy chiqimlarning salmoqli qismini tashkil etmoqda.` : 'Doimiy to\'lovlaringizni tartibli nazorat qilib boring.'}
3. ${fromMe > 0 ? `Olingan qarzlaringizni (${formatCurrency(fromMe)}) birinchi navbatda yopish foydali.` : 'Qarz yukingiz yo\'q — bu moliyaviy erkinligingizni oshiradi!'}`,

    ru: `📊 **Отчет Экспресс-Аудита AI** ${auditEmoji}

• **Текущий Баланс:** ${formatCurrency(balance)}
• **Общий Доход:** ${formatCurrency(totalIncome)}
• **Общий Расход:** ${formatCurrency(totalExpense)}
• **Уровень Сбережений:** ${savingsRate}%
• **Ежемесячные Платежи:** ${formatCurrency(subTotal)}
• **Текущие Долги:** ${formatCurrency(fromMe)}

💡 **Рекомендация AI:**
1. ${savingsRate > 20 ? 'Отличный результат! Рекомендуется инвестировать сбережения или отложить в резервный фонд.' : 'Старайтесь откладывать 15-20% дохода в резерв сразу после получения.'}
2. ${subTotal > 0 ? `Регулярные платежи (${formatCurrency(subTotal)}) составляют значительную часть ваших расходов.` : 'Держите регулярные платежи под контролем.'}
3. ${fromMe > 0 ? `Рекомендуется погасить долги (${formatCurrency(fromMe)}) в первую очередь.` : 'У вас нет долгов — это отлично повышает финансовую устойчивость!'}`,

    en: `📊 **AI Financial Audit Report** ${auditEmoji}

• **Current Balance:** ${formatCurrency(balance)}
• **Total Income:** ${formatCurrency(totalIncome)}
• **Total Expenses:** ${formatCurrency(totalExpense)}
• **Savings Rate:** ${savingsRate}%
• **Monthly Recurring:** ${formatCurrency(subTotal)}
• **Active Borrowed:** ${formatCurrency(fromMe)}

💡 **AI Recommendation:**
1. ${savingsRate > 20 ? 'Great job! Consider investing your savings or putting them in a emergency fund.' : 'Try to save 15-20% of your income into emergency savings right when you earn it.'}
2. ${subTotal > 0 ? `Recurring payments (${formatCurrency(subTotal)}) make up a significant portion of expenses.` : 'Keep your recurring payments organized.'}
3. ${fromMe > 0 ? `Prioritize paying off active borrowed debts (${formatCurrency(fromMe)}).` : 'Zero active debts — great job maintaining financial freedom!'}`,

    tr: `📊 **AI Finansal Ekspres Denetim Raporu** ${auditEmoji}

• **Mevcut Bakiye:** ${formatCurrency(balance)}
• **Toplam Gelir:** ${formatCurrency(totalIncome)}
• **Toplam Gider:** ${formatCurrency(totalExpense)}
• **Tasarruf Oranı:** %${savingsRate}
• **Aylık Düzenli Ödemeler:** ${formatCurrency(subTotal)}
• **Borçlar:** ${formatCurrency(fromMe)}

💡 **AI Tavsiyesi:**
1. ${savingsRate > 20 ? 'Harika sonuç! Birikimlerinizi yatırıma veya acil durum fonuna yönlendirmeniz önerilir.' : 'Gelirinizin %15-20 kadarlarını düzenli tasarruf etmeye çalışın.'}
2. ${subTotal > 0 ? `Sabit ödemeleriniz (${formatCurrency(subTotal)}) giderlerinizin önemli bir kısmını oluşturuyor.` : 'Düzenli ödemelerinizi kontrol altında tutun.'}
3. ${fromMe > 0 ? `Öncelikle borçlarınızı (${formatCurrency(fromMe)}) kapatmanız tavsiye edilir.` : 'Borcunuz yok — bu finansal özgürlüğünüzü artırır!'}`,

    ky: `📊 **AI Каржылык Экспресс-Аудит Отчету** ${auditEmoji}

• **Учурдагы Баланс:** ${formatCurrency(balance)}
• **Жалпы Киреше:** ${formatCurrency(totalIncome)}
• **Жалпы Чыгыша:** ${formatCurrency(totalExpense)}
• **Үнөмдөө Пайызы:** ${savingsRate}%
• **Айлык Туруктуу Төлөмдөр:** ${formatCurrency(subTotal)}
• **Алынган Карыздар:** ${formatCurrency(fromMe)}

💡 **AI Сунушу:**
1. ${savingsRate > 20 ? 'Абдан жакшы натыйжа! Топтолгон акчаны инвестициялоо сунушталат.' : 'Ар айлык кирешенин 15-20% алдын ала фондго чогултууну адат кылыңыз.'}
2. ${subTotal > 0 ? `Туруктуу төлөмдөрүңүз (${formatCurrency(subTotal)}) чыгышалардын негизги бөлүгүн түзөт.` : 'Төлөмдөрдү тартипте кармаңыз.'}
3. ${fromMe > 0 ? `Карыздарды (${formatCurrency(fromMe)}) биринчи кезекте жабуу пайдалуу.` : 'Карызыңыз жок — бул абдан жакшы!'}`,

    tg: `📊 **Ҳисоботи Экспресс-Аудити Молиявии AI** ${auditEmoji}

• **Баланси Ҷорӣ:** ${formatCurrency(balance)}
• **Даромади Умумӣ:** ${formatCurrency(totalIncome)}
• **Хароҷоти Умумӣ:** ${formatCurrency(totalExpense)}
• **Нишондиҳандаи Пасандоз:** ${savingsRate}%
• **Пардохтҳои Мунтазами Моҳона:** ${formatCurrency(subTotal)}
• **Қарзҳои Гирифташуда:** ${formatCurrency(fromMe)}

💡 **Тавсияи AI:**
1. ${savingsRate > 20 ? 'Натиҷаи олӣ! Маблағи сарфашударо сармоягузорӣ кунед.' : 'Ҳар моҳ 15-20%-и даромадатонро пасандоз кунед.'}
2. ${subTotal > 0 ? `Пардохтҳои мунтазам (${formatCurrency(subTotal)}) қисми зиёди хароҷотро ташкил медиҳанд.` : 'Пардохтҳоро назорат кунед.'}
3. ${fromMe > 0 ? `Қарзҳоро (${formatCurrency(fromMe)}) дар навбати аввал пӯшед.` : 'Қарз надоред — ин хеле хуб аст!'}`
  };

  const auditReport = auditTemplates[lang] || auditTemplates['kk'];
  appendAIMessage('ai', auditReport);
}

function quickAddAITx(title, amount, type) {
  const newTx = {
    id: 'tx_ai_' + Date.now(),
    type: type || 'expense',
    amount: parseFloat(amount),
    category: title || 'Boshqa',
    date: getTodayStr(),
    description: 'AI орқали тезкор қўшилди',
    createdAt: new Date().toISOString()
  };

  if (!state.categories[type || 'expense'].includes(title)) {
    state.categories[type || 'expense'].push(title);
  }

  state.transactions.unshift(newTx);
  saveState();
  renderAll();

  showToast(`${title} — ${formatCurrency(amount)} сақланди! ✅`, 'success');
}

function initAIChat() {
  if (!aiChatWelcomed) {
    aiChatWelcomed = true;
    aiChatHistory = [];
    const welcomeMsg = getMsg('ai_welcome');
    appendAIMessage('ai', welcomeMsg);
  }
  updateAIChatUI();
}

// Update all AI screen UI text to match current language
function updateAIChatUI() {
  // Update chip texts
  document.querySelectorAll('.ai-chip').forEach(chip => {
    const key = chip.getAttribute('data-i18n');
    if (key) chip.textContent = getMsg(key);
  });
  // Update placeholder
  const inputEl = document.getElementById('ai-user-input');
  if (inputEl) inputEl.placeholder = getMsg('ai_placeholder');
  // Update header title and subtitle
  const titleEl = document.querySelector('.ai-chat-title');
  if (titleEl) titleEl.textContent = getMsg('ai_title');
  const subEl = document.querySelector('.ai-chat-sub');
  if (subEl) subEl.textContent = getMsg('ai_sub');
  // Update AI header button tooltip in header
  const aiHeaderBtn = document.getElementById('header-ai-btn');
  if (aiHeaderBtn) aiHeaderBtn.title = getMsg('ai_title');
  // Update AI nav button text
  const aiNavSpan = document.querySelector('#nav-ai span');
  if (aiNavSpan) aiNavSpan.textContent = getMsg('nav_ai');
}

// Called when language changes - reset chat with new welcome message
function updateAIScreenLanguage() {
  // Reset welcome state so new welcome message shows in new language
  aiChatWelcomed = false;
  // Clear existing messages
  const wrap = document.getElementById('ai-messages');
  if (wrap) wrap.innerHTML = '';
  // Show chips again
  const chips = document.getElementById('ai-chips');
  if (chips) chips.style.display = '';
  // Clear history (new language context)
  aiChatHistory = [];
  // Update all UI text
  updateAIChatUI();
  // If user is currently on AI screen, show new welcome message
  if (state.currentTab === 'ai') {
    initAIChat();
  }
}

function appendAIMessage(role, text) {
  const wrap = document.getElementById('ai-messages');
  if (!wrap) return;

  const div = document.createElement('div');
  div.className = `ai-msg ai-msg-${role}`;

  if (role === 'ai') {
    div.innerHTML = `
      <div class="ai-bubble-wrap">
        <div class="ai-bot-icon">🧠</div>
        <div class="ai-bubble">${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</div>
      </div>`;
  } else {
    div.innerHTML = `<div class="ai-user-bubble">${text}</div>`;
  }

  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div;
}

function showAITyping() {
  const wrap = document.getElementById('ai-messages');
  if (!wrap) return null;
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg-ai ai-typing-indicator';
  div.innerHTML = `
    <div class="ai-bubble-wrap">
      <div class="ai-bot-icon">🧠</div>
      <div class="ai-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>`;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div;
}

function generateLocalAIResponse(userText) {
  const lang = state.language || 'kk';
  const text = (userText || '').toLowerCase();

  let totalIncome = 0;
  let totalExpense = 0;
  state.transactions.forEach(tx => {
    if (tx.type === 'income') totalIncome += tx.amount;
    else totalExpense += tx.amount;
  });
  const balance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0;

  // Category breakdown
  const catTotals = {};
  state.transactions.filter(t => t.type === 'expense').forEach(t => {
    catTotals[t.category] = (catTotals[t.category] || 0) + t.amount;
  });
  const topCatLines = Object.entries(catTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([cat, amt]) => `• ${cat}: ${formatCurrency(amt)}`)
    .join('\n');

  // Debts
  const activeDebts = state.debts.filter(d => !d.isCompleted);
  let borrowedAmt = 0;
  let toMeAmt = 0;
  activeDebts.forEach(d => {
    if (d.type === 'borrow') borrowedAmt += d.amount;
    else if (d.type === 'lend') toMeAmt += d.amount;
  });

  // Date and month-end calculation
  const now = new Date();
  const currentDay = now.getDate();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const daysLeft = Math.max(1, daysInMonth - currentDay);
  const avgDailyExpense = currentDay > 0 ? totalExpense / currentDay : 0;
  const projectedMonthExpense = Math.round(totalExpense + (avgDailyExpense * daysLeft));

  // 1. Quick transaction detection (e.g. "Tushlik 25000" or "Lunch 15")
  const txMatch = userText.match(/^([a-zA-Zа-яА-ЯёЁӨөӘәҒғҚқҢңҮүҰұҺһo'g's'h'—\s]{2,})\s+(\d+[\d\s]*)$/);
  if (txMatch) {
    const matchTitle = txMatch[1].trim();
    const matchNum = parseFloat(txMatch[2].replace(/\s+/g, ''));
    if (matchNum > 0 && matchTitle.length >= 2) {
      const respTemplates = {
        uz: `✅ **"${matchTitle}"** bo'yicha **${formatCurrency(matchNum)}** operatsiyasi tayyor!\n\nPastroqdagi tugmani bosib chiqimlarga tez qo'shishingiz mumkin:`,
        kk: `✅ **"${matchTitle}"** бойынша **${formatCurrency(matchNum)}** операциясы дайын!\n\nТөмендегі түймені басып, шығыстарға тез қоса аласыз:`,
        ru: `✅ Операция **"${matchTitle}"** на сумму **${formatCurrency(matchNum)}** готова!\n\nНажмите кнопку ниже для быстрого добавления в расходы:`,
        en: `✅ Transaction **"${matchTitle}"** for **${formatCurrency(matchNum)}** is ready!\n\nClick the button below to quickly add to expenses:`,
        tr: `✅ **"${matchTitle}"** için **${formatCurrency(matchNum)}** tutarındaki işlem hazır!\n\nGiderlere hızlıca eklemek için aşağıdaki butona tıklayın:`,
        ky: `✅ **"${matchTitle}"** боюнча **${formatCurrency(matchNum)}** операциясы даяр!\n\nЧыгашаларга тез кошуу үчүн төмөндөгү баскычты басыңыз:`,
        tg: `✅ Амалиёт **"${matchTitle}"** ба маблағи **${formatCurrency(matchNum)}** тайёр аст!\n\nБарои иловаи тез ба хароҷот тугмаи зерро пахш кунед:`
      };
      return respTemplates[lang] || respTemplates['kk'];
    }
  }

  // 2. Balance query
  if (text.includes('balans') || text.includes('баланс') || text.includes('balance') || text.includes('bakiye') || text.includes('kirim') || text.includes('кіріс') || text.includes('доход') || text.includes('income') || text.includes('gelir') || text.includes('киреше') || text.includes('даромад')) {
    const balanceResp = {
      uz: `📊 **Sizning Moliyaviy Statistikangiz:**\n\n• **Joriy Balans:** ${formatCurrency(balance)}\n• **Jami Kirim:** ${formatCurrency(totalIncome)}\n• **Jami Chiqim:** ${formatCurrency(totalExpense)}\n• **Jamg'arma ko'rsatkichi:** ${savingsRate}%\n\n💡 ${balance >= 0 ? 'Balansingiz ijobiy! Daromadning kamida 20% qismini zaxiraga ajratishni tavsiya etaman.' : 'Chiqimlaringiz daromadingizdan oshib ketgan! Zudlik bilan keraksiz xarajatlarni qisqartiring.'}`,
      kk: `📊 **Сіздің Қаржылық Статистикаңыз:**\n\n• **Ағымдағы Баланс:** ${formatCurrency(balance)}\n• **Жалпы Кіріс:** ${formatCurrency(totalIncome)}\n• **Жалпы Шығыс:** ${formatCurrency(totalExpense)}\n• **Жинақ Пайызы:** ${savingsRate}%\n\n💡 ${balance >= 0 ? 'Балансыңыз оң көрсеткіште! Кірістің кемінде 20% бөлігін жинаққа қосуды ұсынамын.' : 'Шығыстарыңыз кірістен асып кетті! Қажетсіз шығыстарды азайту ұсынылады.'}`,
      ru: `📊 **Ваша Финансовая Статистика:**\n\n• **Текущий Баланс:** ${formatCurrency(balance)}\n• **Общий Доход:** ${formatCurrency(totalIncome)}\n• **Общий Расход:** ${formatCurrency(totalExpense)}\n• **Норма Сбережений:** ${savingsRate}%\n\n💡 ${balance >= 0 ? 'Баланс положительный! Рекомендуется откладывать 20% дохода в сбережения.' : 'Расходы превышают доходы! Рекомендуется срочно сократить расходы.'}`,
      en: `📊 **Your Financial Snapshot:**\n\n• **Current Balance:** ${formatCurrency(balance)}\n• **Total Income:** ${formatCurrency(totalIncome)}\n• **Total Expenses:** ${formatCurrency(totalExpense)}\n• **Savings Rate:** ${savingsRate}%\n\n💡 ${balance >= 0 ? 'Your net balance is positive! Try to save at least 20% of your earnings.' : 'Your expenses exceed your income! Cut back non-essential expenses immediately.'}`,
      tr: `📊 **Finansal Durum Özetiniz:**\n\n• **Mevcut Bakiye:** ${formatCurrency(balance)}\n• **Toplam Gelir:** ${formatCurrency(totalIncome)}\n• **Toplam Gider:** ${formatCurrency(totalExpense)}\n• **Tasarruf Oranı:** %${savingsRate}\n\n💡 ${balance >= 0 ? 'Bakiyeniz artıdadır! Gelirinizin en az %20 kadarlarını birikime ayırmanız önerilir.' : 'Giderleriniz gelirinizi aştı! Gereksiz harcamaları derhal kısıtlayın.'}`,
      ky: `📊 **Сиздин Каржылык Статистикаңыз:**\n\n• **Учурдагы Баланс:** ${formatCurrency(balance)}\n• **Жалпы Киреше:** ${formatCurrency(totalIncome)}\n• **Жалпы Чыгыша:** ${formatCurrency(totalExpense)}\n• **Үнөмдөө Пайызы:** ${savingsRate}%\n\n💡 ${balance >= 0 ? 'Балансыңыз оң көрсөткүчтө! Кирешенин 20% дароо резервке чогултуңуз.' : 'Чыгашалар кирешеден ашып кетти! Кажетсиз чыгашаларды тез арада азайтыңыз.'}`,
      tg: `📊 **Авзои Молиявии Шумо:**\n\n• **Баланси Ҷорӣ:** ${formatCurrency(balance)}\n• **Даромади Умумӣ:** ${formatCurrency(totalIncome)}\n• **Хароҷоти Умумӣ:** ${formatCurrency(totalExpense)}\n• **Нишондиҳандаи Пасандоз:** ${savingsRate}%\n\n💡 ${balance >= 0 ? 'Баланси шумо мусбат аст! Ҳадди ақал 20%-и даромадро пасандоз кунед.' : 'Хароҷот аз даромад зиёд аст! Хароҷоти нолозимро фавран кам кунед.'}`
    };
    return balanceResp[lang] || balanceResp['kk'];
  }

  // 3. Expense query
  if (text.includes('chiqim') || text.includes('xarajat') || text.includes('шығыс') || text.includes('расход') || text.includes('expense') || text.includes('gider') || text.includes('чыгыша') || text.includes('хароҷот') || text.includes('kategori') || text.includes('санат') || text.includes('траты')) {
    const expResp = {
      uz: `📉 **Chiqimlar Tahlili:**\n\n• **Jami Chiqim:** ${formatCurrency(totalExpense)}\n• **Kunlik o'rtacha:** ${formatCurrency(Math.round(avgDailyExpense))}\n\n**Eng ko'p xarajat qilingan kategoriyalar:**\n${topCatLines || '• Ma\'lumot yo\'q'}\n\n💡 Eng ko'p xarajat qilinayotgan 1-2 kategoriyaga oylik limit qo'yish orqali xarajatlarni 15-30% tejashingiz mumkin.`,
      kk: `📉 **Шығыстар Талдауы:**\n\n• **Жалпы Шығыс:** ${formatCurrency(totalExpense)}\n• **Күнделікті орташа:** ${formatCurrency(Math.round(avgDailyExpense))}\n\n**Ең көп жұмсалған санаттар:**\n${topCatLines || '• Деректер жоқ'}\n\n💡 Ең көп қаражат кететін 1-2 санатты бақылауға алып, айлық лимит қою арқылы шығысты 15-30% үнемдей аласыз.`,
      ru: `📉 **Анализ Расходов:**\n\n• **Общие Расходы:** ${formatCurrency(totalExpense)}\n• **В среднем в день:** ${formatCurrency(Math.round(avgDailyExpense))}\n\n**Топ категорий трат:**\n${topCatLines || '• Нет данных'}\n\n💡 Установите лимиты на основные категории расходов для экономии 15-30% средств.`,
      en: `📉 **Expense Breakdown:**\n\n• **Total Expenses:** ${formatCurrency(totalExpense)}\n• **Daily Average:** ${formatCurrency(Math.round(avgDailyExpense))}\n\n**Top Spending Categories:**\n${topCatLines || '• No data'}\n\n💡 Set category budgets for your highest spending categories to cut expenses by 15-30%.`,
      tr: `📉 **Gider Analizi:**\n\n• **Toplam Gider:** ${formatCurrency(totalExpense)}\n• **Günlük Ortalama:** ${formatCurrency(Math.round(avgDailyExpense))}\n\n**En Çok Harcanan Kategoriler:**\n${topCatLines || '• Veri yok'}\n\n💡 En fazla harcama yapılan kategorilere bütçe limiti koyarak %15-30 tasarruf edebilirsiniz.`,
      ky: `📉 **Чыгашалар Талдоосу:**\n\n• **Жалпы Чыгыша:** ${formatCurrency(totalExpense)}\n• **Күнүмдүк орточо:** ${formatCurrency(Math.round(avgDailyExpense))}\n\n**Эң көп сарпталган категориялар:**\n${topCatLines || '• Маалымат жок'}\n\n💡 Эң көп акча кетип жаткан категорияларга лимит коюп, 15-30% үнөмдөңүз.`,
      tg: `📉 **Таҳлили Хароҷот:**\n\n• **Хароҷоти Умумӣ:** ${formatCurrency(totalExpense)}\n• **Миёнаи рӯзона:** ${formatCurrency(Math.round(avgDailyExpense))}\n\n**Категорияҳои бештари хароҷот:**\n${topCatLines || '• Маълумот нест'}\n\n💡 Гузоштани лимит барои категорияҳои асосӣ хароҷотро 15-30% сарфа мекунад.`
    };
    return expResp[lang] || expResp['kk'];
  }

  // 4. Debt query
  if (text.includes('qarz') || text.includes('қарыз') || text.includes('долг') || text.includes('debt') || text.includes('borç') || text.includes('карыз') || text.includes('қарз') || text.includes('кредит')) {
    const debtResp = {
      uz: `⏳ **Qarzlar bo'yicha ma'lumot:**\n\n• **Faol Qarzlar Soni:** ${activeDebts.length}\n• **Qaytarish kerak bo'lgan qarz (Olingan):** ${formatCurrency(borrowedAmt)}\n• **Menga qaytariladigan qarz (Berilgan):** ${formatCurrency(toMeAmt)}\n\n💡 Qarzlarni o'z vaqtida yopish moliyaviy barqarorlik uchun eng muhim qadamdir!`,
      kk: `⏳ **Қарыздар бойынша ақпарат:**\n\n• **Белсенді Қарыздар Саны:** ${activeDebts.length}\n• **Қайтару керек қарыз (Алынған):** ${formatCurrency(borrowedAmt)}\n• **Маған қайтару керек (Берілген):** ${formatCurrency(toMeAmt)}\n\n💡 Қарыздарды уақытында жабу қаржылық беделіңіз бен басыңыздың амандығы үшін ең маңызды фактор!`,
      ru: `⏳ **Информация о Долгах:**\n\n• **Активных долгов:** ${activeDebts.length}\n• **Взято в долг (к возврату):** ${formatCurrency(borrowedAmt)}\n• **Дано в долг (мне должны):** ${formatCurrency(toMeAmt)}\n\n💡 Своевременное погашение долгов повышает вашу финансовую устойчивость!`,
      en: `⏳ **Debt Summary:**\n\n• **Active Debts Count:** ${activeDebts.length}\n• **Borrowed (I owe):** ${formatCurrency(borrowedAmt)}\n• **Lent (Owed to me):** ${formatCurrency(toMeAmt)}\n\n💡 Clearing high-interest debts early grants total financial stability!`,
      tr: `⏳ **Borç Durumu:**\n\n• **Aktif Borç Sayısı:** ${activeDebts.length}\n• **Alınan Borç (Ödenecek):** ${formatCurrency(borrowedAmt)}\n• **Verilen Borç (Alınacak):** ${formatCurrency(toMeAmt)}\n\n💡 Borçları zamanında kapatmak finansal huzurunuzun anahtarıdır!`,
      ky: `⏳ **Карыздар Боюнча Маалымат:**\n\n• **Активдүү Карыздар:** ${activeDebts.length}\n• **Алынган карыз (Кайтаруу керек):** ${formatCurrency(borrowedAmt)}\n• **Берилген карыз (Мага қайтарылуучу):** ${formatCurrency(toMeAmt)}\n\n💡 Карыздарды убагында жабуу каржылык туруктуулуктун кепили!`,
      tg: `⏳ **Маълумот дар бораи Қарзҳо:**\n\n• **Қарзҳои Фаъол:** ${activeDebts.length}\n• **Қарзи Гирифташуда (Бозгашт):** ${formatCurrency(borrowedAmt)}\n• **Қарзи Додашуда (Ба ман):** ${formatCurrency(toMeAmt)}\n\n💡 Пӯшидани қарзҳо дар вақти муайяншуда молияи шуморо устувор мекунад!`
    };
    return debtResp[lang] || debtResp['kk'];
  }

  // 5. Tips & Savings query
  if (text.includes('maslahat') || text.includes('tejamkorlik') || text.includes('кеңес') || text.includes('үнемдеу') || text.includes('совет') || text.includes('экономия') || text.includes('tip') || text.includes('advice') || text.includes('save') || text.includes('tavsiye') || text.includes('сунуш') || text.includes('маслиҳат')) {
    const tipResp = {
      uz: `🎯 **Aqlli Jamg'arma va Tejamkorlik Maslahatlari:**\n\n1. **50/30/20 qoidasi**: Daromadning 50% qismini zaruriy ehtiyojlarga, 30% xohishlarga, 20% jamg'armaga ajrating.\n2. **Zaxira fondi**: Kamida 3-6 oylik xarajatlarni qoplaydigan zaxira yig'ing.\n3. **Avto-jamg'arma**: Ish haqi olgan kuni 15-20% qismini darhol zaxiraga olib qo'ying!`,
      kk: `🎯 **Ақылды Жинақтау мен Үнемдеу Кеңестері:**\n\n1. **50/30/20 ережесі**: Кірістің 50% негізгі қажеттілікке, 30% қалауларға, 20% жинаққа бөліңіз.\n2. **Захира қоры**: Кем дегенде 3-6 айлық шығысты жабатын резерв жинаңыз.\n3. **Алдымен өзіңізге төлеңіз**: Табыс түскен күні 15-20% бірден жинақ шотына аударыңыз!`,
      ru: `🎯 **Мудрые Советы по Сбережениям:**\n\n1. **Правило 50/30/20**: 50% на основные нужды, 30% на желания, 20% в сбережения.\n2. **Подушка безопасности**: Создайте резерв на 3-6 месяцев постоянных расходов.\n3. **Платите сначала себе**: Переводите 15-20% дохода в накопления прямо в день зарплаты!`,
      en: `🎯 **Smart Financial Savings Tips:**\n\n1. **50/30/20 Rule**: Direct 50% to needs, 30% to wants, and 20% straight to savings.\n2. **Emergency Cushion**: Save enough to cover 3 to 6 months of basic living costs.\n3. **Pay Yourself First**: Automate 15-20% transfers into savings right on payday!`,
      tr: `🎯 **Akıllı Tasarruf ve Birikim İpuçları:**\n\n1. **50/30/20 Kuralı**: Gelirin %50'sini zorunlu ihtiyaçlara, %30'unu isteklere, %20'sini birikime ayırın.\n2. **Acil Durum Fonu**: En az 3-6 aylık zorunlu harcamanızı karşılayan birikim oluşturun.\n3. **Önce Kendinize Ödeyin**: Gelir aldığınız gün %15-20 kadarlarını hemen birikime aktarın!`,
      ky: `🎯 **Акылдуу Үнөмдөө Кеңештери:**\n\n1. **50/30/20 Эрежеси**: Кирешенин 50% муктаждыктарга, 30% каалоолорго, 20% топтомго бөлүңүз.\n2. **Резервдик Фонд**: Кем дегенде 3 айлык чыгашаны жаба турган топтом чогултуңуз.\n3. **Дароо Резервке Салыңыз**: Киреше түшкөн күнү 15-20% өзүнчө эсепке которуңуз!`,
      tg: `🎯 **Маслиҳатҳои Оқилонаи Пасандоз:**\n\n1. **Қоидаи 50/30/20**: 50%-и даромад барои эҳтиёҷоти асосӣ, 30% барои хоҳишҳо, 20% барои пасандоз.\n2. **Фонди Захиравӣ**: Захираеро барои 3-6 моҳи хароҷот эҷод кунед.\n3. **Аввал ба худ пардохт кунед**: ДАР рӯзи гирифтани даромад 15-20%-ро ба пасандоз гузоред!`
    };
    return tipResp[lang] || tipResp['kk'];
  }

  // 6. Forecast query
  if (text.includes('prognoz') || text.includes('болжам') || text.includes('прогноз') || text.includes('forecast') || text.includes('tahmin') || text.includes('болжол') || text.includes('пешгӯӣ') || text.includes('oy oxiri') || text.includes('до конца месяца') || text.includes('end of month')) {
    const forecastResp = {
      uz: `🔮 **Oy Oxirigacha Chiqim Prognozi:**\n\n• **Oy tugashiga qoldi:** ${daysLeft} kun\n• **Hozirgi kunlik o'rtacha xarajat:** ${formatCurrency(Math.round(avgDailyExpense))}\n• **Kutilayotgan oylik jami chiqim:** ${formatCurrency(projectedMonthExpense)}\n\n💡 Hozirgi sur'atni saqlasangiz, oy oxirigacha taxminan ${formatCurrency(projectedMonthExpense)} sarflaysiz. Xarajatlarni tejash uchun kunlik limitni ${formatCurrency(Math.round(Math.max(0, balance) / daysLeft))} soatida ushlab turing!`,
      kk: `🔮 **Ай Соңына Деиінгі Шығыс Болжамы:**\n\n• **Ай аяқталуына қалды:** ${daysLeft} күн\n• **Қазіргі күнделікті орташа шығыс:** ${formatCurrency(Math.round(avgDailyExpense))}\n• **Болжамды айлық жалпы шығыс:** ${formatCurrency(projectedMonthExpense)}\n\n💡 Осы қарқынмен жұмсасаңыз, ай соңына дейін шамамен ${formatCurrency(projectedMonthExpense)} жұмсайсыз. Үнемдеу үшін күнделікті лимит: ${formatCurrency(Math.round(Math.max(0, balance) / daysLeft))}!`,
      ru: `🔮 **Прогноз Расходов до Конца Месяца:**\n\n• **Осталось дней до конца месяца:** ${daysLeft}\n• **Текущий среднедневной расход:** ${formatCurrency(Math.round(avgDailyExpense))}\n• **Прогнозируемый итог за месяц:** ${formatCurrency(projectedMonthExpense)}\n\n💡 При сохранении текущего темпа вы потратите около ${formatCurrency(projectedMonthExpense)}. Чтобы оставаться в плюсе, лимит на день: ${formatCurrency(Math.round(Math.max(0, balance) / daysLeft))}!`,
      en: `🔮 **End of Month Expense Forecast:**\n\n• **Days remaining in month:** ${daysLeft}\n• **Current average daily spending:** ${formatCurrency(Math.round(avgDailyExpense))}\n• **Projected month-end total expense:** ${formatCurrency(projectedMonthExpense)}\n\n💡 At your current spending rate, your projected spending is ${formatCurrency(projectedMonthExpense)}. Recommended daily spending limit: ${formatCurrency(Math.round(Math.max(0, balance) / daysLeft))}!`,
      tr: `🔮 **Ay Sonu Gider Tahmini:**\n\n• **Ay sonuna kalan gün:** ${daysLeft}\n• **Mevcut günlük ortalama harcama:** ${formatCurrency(Math.round(avgDailyExpense))}\n• **Tahmini aylık toplam gider:** ${formatCurrency(projectedMonthExpense)}\n\n💡 Mevcut harcama hızınızı korursanız ay sonuna kadar ${formatCurrency(projectedMonthExpense)} harcayacaksınız. Güvenli günlük harcama limiti: ${formatCurrency(Math.round(Math.max(0, balance) / daysLeft))}!`,
      ky: `🔮 **Ай Аягына Чеинки Чыгаша Болжолу:**\n\n• **Ай аягына калды:** ${daysLeft} күн\n• **Күнүмдүк орточо чыгаша:** ${formatCurrency(Math.round(avgDailyExpense))}\n• **Болжолдуу айлык жалпы чыгаша:** ${formatCurrency(projectedMonthExpense)}\n\n💡 Ушул темпте уланта берсеңиз, ай аягында болжол менен ${formatCurrency(projectedMonthExpense)} сарптайсыз. Сунушталган күнүмдүк лимит: ${formatCurrency(Math.round(Math.max(0, balance) / daysLeft))}!`,
      tg: `🔮 **Пешгӯии Хароҷот то Охири Моҳ:**\n\n• **Рӯзҳои боқимонда то охири моҳ:** ${daysLeft}\n• **Хароҷоти миёнаи рӯзона:** ${formatCurrency(Math.round(avgDailyExpense))}\n• **Хароҷоти пешгӯишавандаи моҳона:** ${formatCurrency(projectedMonthExpense)}\n\n💡 Бо суръати ҷорӣ шумо то охири моҳ тақрибан ${formatCurrency(projectedMonthExpense)} хароҷот мекунед. Лимити бехатари рӯзона: ${formatCurrency(Math.round(Math.max(0, balance) / daysLeft))}!`
    };
    return forecastResp[lang] || forecastResp['kk'];
  }

  // 7. Default smart general AI response
  const generalResp = {
    uz: `💡 **FinFlow Moliyaviy Aqlli Maslahati:**\n\n1. **50/30/20 qoidasiga amal qiling**: Daromadning 50% qismini asosiy ehtiyojlarga, 30% xohishlarga, 20% zaxiraga ajrating.\n2. **Zaxira fondini yarating**: Kamida 3-6 oylik xarajatlarni qoplaydigan zaxira yig'ing.\n3. **Kunlik hisob yuriting**: Har bir sarflangan summani FinFlow ilovasiga kiritib boring!\n\nSavolingiz bo'lsa, marhamat, menga yozing! 😊`,
    kk: `💡 **FinFlow Қаржылық Ақылды Кеңесі:**\n\n1. **50/30/20 ережесін ұстаныңыз**: Кірістің 50% негізгі қажеттілікке, 30% қалауларға, 20% жинаққа бөліңіз.\n2. **Захира қорын жасаңыз**: Кем дегенде 3-6 айлық шығысты жабатын резерв жинаңыз.\n3. **Күнделікті есеп жүргізіңіз**: Жұмсалған әрбір теңгені FinFlow қосымшасына жазып отырыңыз!\n\nСұрағыңыз болса, мархабат, маған жазыңыз! 😊`,
    ru: `💡 **Умный Финансовый Совет FinFlow:**\n\n1. **Правило 50/30/20**: 50% на основные нужды, 30% на желания, 20% в сбережения.\n2. **Создайте подушку безопасности**: Отложите сумму равную 3-6 месячным расходам.\n3. **Ведите ежедневный учет**: Записывайте каждые траты в приложение FinFlow!\n\nЗадавайте любые вопросы, я с радостью отвечу! 😊`,
    en: `💡 **Smart FinFlow Financial Advice:**\n\n1. **Follow 50/30/20 Rule**: 50% for necessities, 30% for wants, and 20% for emergency savings.\n2. **Build an Emergency Fund**: Keep 3 to 6 months worth of essential expenses saved.\n3. **Track Daily Spending**: Log every single transaction right inside FinFlow!\n\nFeel free to ask any financial question! 😊`,
    tr: `💡 **Akıllı FinFlow Finansal Tavsiyesi:**\n\n1. **50/30/20 Kuralını Uygulayın**: Gelirin %50'si zorunlu giderlere, %30'u isteklere, %20'si birikime.\n2. **Yedek Akçe Oluşturun**: En az 3-6 aylık giderinizi karşılayacak acil durum fonu kurun.\n3. **Günlük Harcamayı İzleyin**: Yapılan her harcamayı FinFlow uygulamasına kaydedin!\n\nBana istediğiniz finansal soruyu sorabilirsiniz! 😊`,
    ky: `💡 **FinFlow Каржылык Акылдуу Кеңеши:**\n\n1. **50/30/20 эрежесин карманыңыз**: Кирешенин 50% зарыл муктаждыктарга, 30% каалоолорго, 20% топтомго бөлүңүз.\n2. **Резервдик фонд түзүңүз**: Кем дегенде 3-6 айлык чыгашаны жаба турган топтом чогултуңуз.\n3. **Күнүмдүк эсеп жүргүзүңүз**: Ар бир сарпталган акчаны FinFlow тиркемесине киргизип туруңуз!\n\nСурооңуз болсо, мага жазыңыз! 😊`,
    tg: `💡 **Маслиҳати Оқилонаи Молиявии FinFlow:**\n\n1. **Қоидаи 50/30/20-ро риоя кунед**: 50%-и даромад барои эҳтиёҷоти асосӣ, 30% барои хоҳишҳо, 20% барои пасандоз.\n2. **Фонди захиравӣ созед**: Захираеро барои 3-6 моҳи хароҷот ҷамъ кунед.\n3. **Ҳисоботи рӯзона баред**: Ҳар як хароҷотро ба барномаи FinFlow дохил кунед!\n\nАгар саволе дошта бошед, марҳамат ба ман нависед! 😊`
  };

  return generalResp[lang] || generalResp['kk'];
}

async function sendAIMessage() {
  const input = document.getElementById('ai-user-input');
  const sendBtn = document.getElementById('ai-send-btn');
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.disabled = true;
  if (sendBtn) sendBtn.disabled = true;

  // Hide chips after first message
  const chips = document.getElementById('ai-chips');
  if (chips) chips.style.display = 'none';

  appendAIMessage('user', text);

  // Show typing indicator
  const typingEl = showAITyping();

  try {
    let aiText = '';

    // Check if Gemini API key is configured and valid
    if (GEMINI_API_KEY && !GEMINI_API_KEY.includes('ReplaceWithYourKey')) {
      const systemCtx = buildAIContext();
      const history = aiChatHistory.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text || '' }]
      }));

      const langDirectives = {
        kk: " (НАЗАР АУДАРЫҢЫЗ: ТЕК ҚАЗАҚ ТІЛІНДЕ ЖАУАП БЕРІҢІЗ! Өзбек немесе орыс тілінде жауап беруге ҚАТАҢ ТЫЙЫМ САЛЫНАДЫ!)",
        uz: " (DIQQAT: FAQAT O'ZBEK TILIDA JAVOB BERING!)",
        ru: " (ВНИМАНИЕ: ОТВЕЧАЙТЕ СТРОГО НА РУССКОМ ЯЗЫКЕ!)",
        en: " (ATTENTION: ALWAYS RESPOND STRICTLY IN ENGLISH ONLY!)",
        tr: " (DİKKAT: HER ZAMAN SADECE TÜRKÇE CEVAP VERİN!)",
        ky: " (КӨҢҮЛ БУРУҢУЗ: ТЕК ГАНА КЫРГЫЗ ТИЛИНДЕ ЖООП БЕРИҢИЗ!)",
        tg: " (ДИҚҚАТ: ТАНҲО БА ЗАБОНИ ТОҶИКӢ ҶАВОБ ДИҲЕД!)"
      };

      const userLang = state.language || 'kk';
      const promptedText = text + (langDirectives[userLang] || langDirectives['kk']);

      const body = {
        system_instruction: { parts: [{ text: systemCtx }] },
        contents: [
          ...history,
          { role: 'user', parts: [{ text: promptedText }] }
        ]
      };

      const resp = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (resp.ok) {
        const data = await resp.json();
        aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      }
    }

    // Fallback to Smart Native AI Engine if API text is empty
    if (!aiText) {
      aiText = generateLocalAIResponse(text);
    }

    // Smart Quick Transaction Detection
    const txMatch = text.match(/^([a-zA-Zа-яА-ЯёЁӨөӘәҒғҚқҢңҮүҰұҺһo'g's'h'—\s]{2,})\s+(\d+[\d\s]*)$/);
    if (txMatch) {
      const matchTitle = txMatch[1].trim();
      const matchNum = parseFloat(txMatch[2].replace(/\s+/g, ''));
      if (matchNum > 0 && matchTitle.length >= 2) {
        const quickAddHeader = {
          kk: '👇 **Тез қосу:**',
          uz: '👇 **Tezkor qo\'shish:**',
          ru: '👇 **Быстрое добавление:**',
          en: '👇 **Quick Add:**',
          tr: '👇 **Hızlı Ekle:**',
          ky: '👇 **Тез кошуу:**',
          tg: '👇 **Иловаи тез:**'
        };
        const quickAddAction = {
          kk: 'Шығысқа қосу',
          uz: 'Chiqimga qo\'shish',
          ru: 'Добавить в расходы',
          en: 'Add to Expenses',
          tr: 'Giderlere Ekle',
          ky: 'Чыгышага кошуу',
          tg: 'Илова ба хароҷот'
        };
        const lang = state.language || 'kk';
        aiText += `\n\n${quickAddHeader[lang] || quickAddHeader['kk']}\n<button class="sub-action-btn pay-btn" style="margin-top:6px;" onclick="quickAddAITx('${matchTitle.replace(/'/g, "\\'")}', ${matchNum}, 'expense')">➕ "${matchTitle} — ${formatCurrency(matchNum)}" ${quickAddAction[lang] || quickAddAction['kk']}</button>`;
      }
    }

    if (typingEl) typingEl.remove();
    appendAIMessage('ai', aiText);

    aiChatHistory.push({ role: 'user', text });
    aiChatHistory.push({ role: 'model', text: aiText });
    if (aiChatHistory.length > 20) aiChatHistory = aiChatHistory.slice(-20);

  } catch (err) {
    if (typingEl) typingEl.remove();
    const fallbackText = generateLocalAIResponse(text);
    appendAIMessage('ai', fallbackText);
    console.error('AI error fallback:', err);
  } finally {
    input.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    input.focus();
  }
}

function sendAIChip(btn) {
  const text = btn.textContent.trim();
  const input = document.getElementById('ai-user-input');
  if (input) {
    input.value = text;
    sendAIMessage();
  }
}

// Quick amount button handler
function addQuickAmount(val) {
  const el = document.getElementById('tx-amount');
  if (!el) return;
  const current = parseFloat(el.value) || 0;
  el.value = current + val;
  el.focus();
  el.dispatchEvent(new Event('input', { bubbles: true }));
}

/* ==========================================================================
   22. SUBSCRIPTIONS & RECURRING PAYMENTS LOGIC
   ========================================================================== */
function openSubscriptionModal() {
  const modal = document.getElementById('subscription-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSubscriptionModal() {
  const modal = document.getElementById('subscription-modal');
  if (modal) modal.classList.add('hidden');
}

function handleSubscriptionSubmit(e) {
  e.preventDefault();
  const titleInput = document.getElementById('sub-title-input');
  const amountInput = document.getElementById('sub-amount-input');
  const dayInput = document.getElementById('sub-day-input');
  const iconInput = document.getElementById('sub-icon-input');

  const title = titleInput?.value.trim();
  const amount = parseFloat(amountInput?.value);
  const dueDay = parseInt(dayInput?.value, 10);
  const icon = iconInput?.value || '💳';

  if (!title || title.length < 2) {
    showToast(getMsg('name_min'), 'error');
    return;
  }
  if (!amount || amount <= 0) {
    showToast(getMsg('enter_amount'), 'error');
    return;
  }

  const newSub = {
    id: 'sub_' + Date.now(),
    title,
    amount,
    dueDay: dueDay || 1,
    icon,
    isPaidThisMonth: false,
    createdAt: getTodayStr()
  };

  if (!state.subscriptions) state.subscriptions = [];
  state.subscriptions.unshift(newSub);
  saveState();

  closeSubscriptionModal();
  if (titleInput) titleInput.value = '';
  if (amountInput) amountInput.value = '';

  showToast(getMsg('sub_saved'), 'success');
  renderSubscriptions();
}

function paySubscription(id) {
  const sub = state.subscriptions?.find(s => s.id === id);
  if (!sub) return;

  const newTx = {
    id: 'tx_sub_' + Date.now(),
    type: 'expense',
    amount: sub.amount,
    category: sub.icon + ' ' + sub.title,
    date: getTodayStr(),
    description: getMsg('subscriptions_title'),
    createdAt: new Date().toISOString()
  };

  if (!state.categories.expense.includes(sub.icon + ' ' + sub.title)) {
    state.categories.expense.push(sub.icon + ' ' + sub.title);
  }

  state.transactions.unshift(newTx);
  sub.isPaidThisMonth = true;
  sub.lastPaidDate = getTodayStr();

  saveState();
  renderAll();

  showToast(getMsg('sub_paid_msg', { title: sub.title, amount: formatCurrency(sub.amount) }), 'success');
}

function deleteSubscription(id) {
  const sub = state.subscriptions?.find(s => s.id === id);
  if (!sub) return;

  showConfirm(
    getMsg('delete_sub_title'),
    getMsg('delete_sub_desc', { title: sub.title }),
    '🗑️',
    () => {
      state.subscriptions = state.subscriptions.filter(s => s.id !== id);
      saveState();
      renderSubscriptions();
      showToast(getMsg('tx_deleted'), 'info');
    }
  );
}

function renderSubscriptions() {
  const container = document.getElementById('subscriptions-list');
  const totalEl = document.getElementById('total-subscription-amount');
  const paidEl = document.getElementById('paid-subscription-amount');

  if (!state.subscriptions) {
    state.subscriptions = [
      { id: 'sub_1', title: 'Uy ijarasi', amount: 150000, dueDay: 5, icon: '🏠', isPaidThisMonth: false },
      { id: 'sub_2', title: 'Wi-Fi Internet', amount: 6000, dueDay: 10, icon: '🌐', isPaidThisMonth: true, lastPaidDate: getTodayStr() },
      { id: 'sub_3', title: 'Yandex Plus Obuna', amount: 2000, dueDay: 15, icon: '🎬', isPaidThisMonth: false }
    ];
  }

  let totalCommitted = 0;
  let totalPaid = 0;
  const todayDate = new Date();
  const currentDay = todayDate.getDate();

  state.subscriptions.forEach(sub => {
    totalCommitted += Number(sub.amount) || 0;
    if (sub.isPaidThisMonth) {
      totalPaid += Number(sub.amount) || 0;
    }
  });

  if (totalEl) totalEl.textContent = formatCurrency(totalCommitted);
  if (paidEl) paidEl.textContent = formatCurrency(totalPaid);

  if (!container) return;
  container.innerHTML = '';

  if (state.subscriptions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔔</div>
        <p data-i18n="no_subscriptions">${getMsg('no_subscriptions')}</p>
      </div>`;
    return;
  }

  state.subscriptions.forEach(sub => {
    const daysLeft = sub.dueDay - currentDay;
    let statusClass = 'pending';
    let statusText = `${sub.dueDay}-sana`;

    if (sub.isPaidThisMonth) {
      statusClass = 'paid';
      statusText = getMsg('status_paid');
    } else if (daysLeft < 0) {
      statusClass = 'urgent';
      statusText = getMsg('overdue', { days: Math.abs(daysLeft) });
    } else if (daysLeft <= 3) {
      statusClass = 'urgent';
      statusText = getMsg('status_urgent', { days: daysLeft });
    }

    const card = document.createElement('div');
    card.className = 'sub-card';
    card.innerHTML = `
      <div class="sub-card-left">
        <div class="sub-icon-badge">${sub.icon || '💳'}</div>
        <div class="sub-info">
          <span class="sub-title">${sub.title}</span>
          <div class="sub-due-tag">
            <span>${getMsg('every_month_day', { day: sub.dueDay })}</span>
            <span class="sub-status-pill ${statusClass}">${statusText}</span>
          </div>
        </div>
      </div>
      <div class="sub-card-right">
        <div class="sub-amount-text">${formatCurrency(sub.amount)}</div>
        ${!sub.isPaidThisMonth ? `
          <button class="sub-action-btn pay-btn" onclick="paySubscription('${sub.id}')">${getMsg('pay_now')}</button>
        ` : ''}
        <button class="icon-btn-danger" onclick="deleteSubscription('${sub.id}')" title="O'chirish">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
          </svg>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   23. MOBILE CONNECT & QR CODE GENERATOR LOGIC
   ========================================================================== */
function openQRModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.classList.remove('hidden');
  fetchTunnelUrlsAndDrawQR();
}

function closeQRModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.classList.add('hidden');
}

async function fetchTunnelUrlsAndDrawQR() {
  const cloudInput = document.getElementById('qr-cloud-link-input');
  const wifiInput = document.getElementById('qr-wifi-link-input');

  let cloudUrl = window.location.origin;
  let wifiUrl = window.location.origin;

  try {
    const resp = await fetch('/api/tunnel');
    if (resp.ok) {
      const data = await resp.json();
      if (data.cloud_url) cloudUrl = data.cloud_url;
      if (data.local_ip) wifiUrl = `http://${data.local_ip}:${data.port || 3000}`;
    }
  } catch (e) {
    console.log('Tunnel API fetch check fallback', e);
  }

  if (cloudInput) cloudInput.value = cloudUrl;
  if (wifiInput) wifiInput.value = wifiUrl;

  const qrImg = document.getElementById('qr-image');
  const canvas = document.getElementById('qr-canvas');

  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(cloudUrl)}`;
    qrImg.style.display = 'block';
    if (canvas) canvas.style.display = 'none';
    qrImg.onerror = () => {
      qrImg.style.display = 'none';
      if (canvas) {
        canvas.style.display = 'block';
        drawUltraQR(canvas, cloudUrl);
      }
    };
  } else if (canvas) {
    canvas.style.display = 'block';
    drawUltraQR(canvas, cloudUrl);
  }
}

function copyQRLink(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  navigator.clipboard?.writeText(input.value).then(() => {
    showToast(getMsg('link_copied'), 'success');
  }).catch(() => {
    input.select();
    document.execCommand('copy');
    showToast(getMsg('link_copied'), 'success');
  });
}

function drawUltraQR(canvas, text) {
  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  ctx.clearRect(0, 0, size, size);

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  const modulesCount = 25;
  const cellSize = size / modulesCount;

  function hashStr(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) + h) + str.charCodeAt(i);
    }
    return Math.abs(h);
  }

  function drawFinder(x, y) {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = '#6366f1';
    ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
  }

  drawFinder(1, 1);
  drawFinder(17, 1);
  drawFinder(1, 17);

  const seed = hashStr(text);
  ctx.fillStyle = '#0f172a';

  for (let r = 0; r < modulesCount; r++) {
    for (let c = 0; c < modulesCount; c++) {
      if ((r < 9 && c < 9) || (r < 9 && c > 15) || (r > 15 && c < 9)) continue;
      if (r >= 10 && r <= 14 && c >= 10 && c <= 14) continue;

      const val = (r * 31 + c * 17 + seed + (text.charCodeAt((r + c) % text.length) || 0)) % 100;
      if (val > 44) {
        ctx.beginPath();
        ctx.arc((c + 0.5) * cellSize, (r + 0.5) * cellSize, cellSize * 0.42, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}


