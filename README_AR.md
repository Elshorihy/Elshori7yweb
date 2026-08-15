# Elshori7y — GitHub / Cloudflare Pages

هذه نسخة المشروع الجاهزة للرفع إلى GitHub ثم الربط مع Cloudflare Pages.

## قبل التشغيل
1. افتح `config.js` وضع بيانات Firebase الخاصة بمشروعك.
2. إذا كانت نسخة المشروع تستخدم Cloudflare Functions للـAI، ضع مفتاح Gemini كـSecret داخل Cloudflare باسم:
   `GEMINI_API_KEY`
3. ارفع محتويات المشروع إلى GitHub.
4. في Cloudflare Pages اختر المستودع.
5. لأن المشروع Frontend ثابت، اترك Build command فارغًا إذا كانت الصفحة تعمل مباشرة، أو استخدم الإعداد الموجود في المشروع إن وُجد.
6. لا تضع مفاتيح API السرية داخل `index.html` أو JavaScript الذي يصل للمستخدم.

## ملاحظة
الكود الأصلي كان يحتوي على جزء لرفع الملفات يحاكي التقدم فقط؛ الرفع الحقيقي للـAPK يحتاج Storage/backend فعلي.
