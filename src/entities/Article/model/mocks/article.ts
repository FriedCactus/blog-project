import {ArticleBlockType, Article, ArticleType} from "../types/article";
import {userMock} from "entities/User";

export const articleMock: Article = {
    "id": "1",
    userId: "",
    "title": "JavaScript в 2025: новые фреймворки и стандарты",
    "subtitle": "Глубокий анализ текущих трендов в разработке на JS",
    "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    "views": 2871,
    "createdAt": "21.04.2025",
    "type": [ArticleType.IT],
    "blocks": [
        {
            "id": "1",
            "type": ArticleBlockType.TEXT,
            "title": "Эволюция языка JavaScript",
            "paragraphs": [
                "JavaScript за последние годы прошёл огромный путь от языка для простых скриптов в браузере до полноценной платформы для веба, мобильных и даже десктопных приложений. В 2025 году ключевыми направлениями остаются модульность, производительность и поддержка серверных компонентов.",
                "Появление новых стандартов ECMAScript продолжает упрощать разработку. Последние предложения включают синтаксический сахар для асинхронного программирования, поддержку Stage 3-функций и новые типы коллекций."
            ]
        },
        {
            "id": "2",
            "type": ArticleBlockType.IMAGE,
            "src": "https://kinsta.com/wp-content/uploads/2022/02/node-inspect.png",
            "title": "Популярность JavaScript и экосистемы в 2025"
        },
        {
            "id": "3",
            "type": ArticleBlockType.CODE,
            "code": "const UserInfo = async () => {\n  const session = await getServerSession(authOptions);\n\n  if (!session) {\n    return <p>Вы не вошли в систему</p>;\n  }\n\n  return (\n    <div>\n      <h2>Привет, {session.user?.name}</h2>\n      <p>Email: {session.user?.email}</p>\n    </div>\n  );\n};\n\nexport default UserInfo;"
        },
    ],
    user: userMock
};