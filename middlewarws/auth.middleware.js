const jwt = require('jsonwebtoken');

// יצירת מידלוואר שיבדוק את הטוקן בכל בקשה שדורשת הרשאות
exports.auth = (req, res, next) => {
    console.log(req.headers); // כל ההידרס

    // const authorization = req.headers.authorization; 
    const { authorization } = req.headers; // כמו השורה שלעיל
    const token = authorization.split(' ')[1]; // שהוספנו לפני הטוקן Bearer מחיקת המילה
    console.log(token); // { id: 121212, role: 'user' }

    const secretKey =  'secret'; // מחרוזת סודית פרטית לשרת שמאפשרת הצפנה של המידע

    try {
        // verify - בדיקת תקינות של הטוקן
        // אם תקין - מחזירה את הפרטים שהצפנו - הרשאות
        // אם לא תקין - זורקת שגיאה
        console.log(secretKey);
     
        const user = jwt.verify(secretKey,token );
        console.log(user); // { id: 121212, role: 'user' }

        // הוספת המידע לבקשה - request
        // בכל הפונקציות הבאות ניתן לגשת ל-2 המשתנים שהוספנו
        req.user_id = user._id;
        req.user_role = user.role;

        return next(); // ממשיך הלאה לקונטרולר - לפונקציה הבאה
    } catch (error) {
        return next({ error: error.message, status: 401 }); // מחזירה שגיאה ללקוח
    }
};