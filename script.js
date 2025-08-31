document.addEventListener('DOMContentLoaded', function() {
    // Sistema de internacionalización con 10 idiomas
    const translations = {
        es: {
            "app.title": "Recetas Caseras",
            "nav.all": "Todas",
            "nav.skin": "Piel",
            "nav.lips": "Labios",
            "nav.hair": "Cabello",
            "nav.masks": "Mascarillas",
            "nav.hands": "Manos",
            "nav.nutrition": "Nutrición",
            "nav.wellness": "Bienestar",
            "nav.favorites": "Favoritos",
            "nav.settings": "Configuración",
            "favorites.title": "Mis Recetas Favoritas",
            "settings.title": "Configuración",
            "settings.theme": "Tema:",
            "settings.light": "Claro",
            "settings.dark": "Oscuro",
            "settings.notifications": "Notificaciones:",
            "settings.language": "Idioma:",
            "settings.save": "Guardar",
            "recipe.ingredients": "Ingredientes",
            "recipe.preparation": "Preparación",
            "recipe.use": "Uso",
            "recipe.recommendations": "Recomendaciones",
            "recipe.warnings": "Advertencias",
            "recipe.schedule": "Cronograma de Uso",
            "recipe.schedule.info": "Usa esta receta durante <strong>{days}</strong> días para ver resultados óptimos.",
            "recipe.schedule.days": "Días usados: {used} de {total}",
            "recipe.comments": "Comentarios",
            "recipe.comments.add": "Agregar Comentario",
            "recipe.comments.placeholder": "Escribe tu comentario aquí...",
            "recipe.comments.submit": "Enviar",
            "recipe.download": "Descargar Receta",
            "recipe.favorite.add": "Agregar a Favoritos",
            "recipe.favorite.remove": "Quitar de Favoritos",
            "comments.no": "No hay comentarios aún. Sé el primero en comentar.",
            "comments.author": "Autor",
            "comments.date": "Fecha",
            "modal.close": "Cerrar",
            "fullscreen": "Pantalla Completa",
            "progress": "Progreso: {percent}%"
        },
        en: {
            "app.title": "Home Remedies",
            "nav.all": "All",
            "nav.skin": "Skin",
            "nav.lips": "Lips",
            "nav.hair": "Hair",
            "nav.masks": "Masks",
            "nav.hands": "Hands",
            "nav.nutrition": "Nutrition",
            "nav.wellness": "Wellness",
            "nav.favorites": "Favorites",
            "nav.settings": "Settings",
            "favorites.title": "My Favorite Recipes",
            "settings.title": "Settings",
            "settings.theme": "Theme:",
            "settings.light": "Light",
            "settings.dark": "Dark",
            "settings.notifications": "Notifications:",
            "settings.language": "Language:",
            "settings.save": "Save",
            "recipe.ingredients": "Ingredients",
            "recipe.preparation": "Preparation",
            "recipe.use": "Use",
            "recipe.recommendations": "Recommendations",
            "recipe.warnings": "Warnings",
            "recipe.schedule": "Usage Schedule",
            "recipe.schedule.info": "Use this recipe for <strong>{days}</strong> days to see optimal results.",
            "recipe.schedule.days": "Days used: {used} of {total}",
            "recipe.comments": "Comments",
            "recipe.comments.add": "Add Comment",
            "recipe.comments.placeholder": "Write your comment here...",
            "recipe.comments.submit": "Submit",
            "recipe.download": "Download Recipe",
            "recipe.favorite.add": "Add to Favorites",
            "recipe.favorite.remove": "Remove from Favorites",
            "comments.no": "No comments yet. Be the first to comment.",
            "comments.author": "Author",
            "comments.date": "Date",
            "modal.close": "Close",
            "fullscreen": "Fullscreen",
            "progress": "Progress: {percent}%"
        },
        pt: {
            "app.title": "Receitas Caseiras",
            "nav.all": "Todas",
            "nav.skin": "Pele",
            "nav.lips": "Lábios",
            "nav.hair": "Cabelo",
            "nav.masks": "Máscaras",
            "nav.hands": "Mãos",
            "nav.nutrition": "Nutrição",
            "nav.wellness": "Bem-estar",
            "nav.favorites": "Favoritos",
            "nav.settings": "Configurações",
            "favorites.title": "Minhas Receitas Favoritas",
            "settings.title": "Configurações",
            "settings.theme": "Tema:",
            "settings.light": "Claro",
            "settings.dark": "Escuro",
            "settings.notifications": "Notificações:",
            "settings.language": "Idioma:",
            "settings.save": "Salvar",
            "recipe.ingredients": "Ingredientes",
            "recipe.preparation": "Preparação",
            "recipe.use": "Uso",
            "recipe.recommendations": "Recomendações",
            "recipe.warnings": "Avisos",
            "recipe.schedule": "Cronograma de Uso",
            "recipe.schedule.info": "Use esta receita por <strong>{days}</strong> dias para ver resultados ótimos.",
            "recipe.schedule.days": "Dias usados: {used} de {total}",
            "recipe.comments": "Comentários",
            "recipe.comments.add": "Adicionar Comentário",
            "recipe.comments.placeholder": "Escreva seu comentário aqui...",
            "recipe.comments.submit": "Enviar",
            "recipe.download": "Baixar Receita",
            "recipe.favorite.add": "Adicionar aos Favoritos",
            "recipe.favorite.remove": "Remover dos Favoritos",
            "comments.no": "Ainda não há comentários. Seja o primeiro a comentar.",
            "comments.author": "Autor",
            "comments.date": "Data",
            "modal.close": "Fechar",
            "fullscreen": "Tela Cheia",
            "progress": "Progresso: {percent}%"
        },
        fr: {
            "app.title": "Recettes Maison",
            "nav.all": "Toutes",
            "nav.skin": "Peau",
            "nav.lips": "Lèvres",
            "nav.hair": "Cheveux",
            "nav.masks": "Masques",
            "nav.hands": "Mains",
            "nav.nutrition": "Nutrition",
            "nav.wellness": "Bien-être",
            "nav.favorites": "Favoris",
            "nav.settings": "Paramètres",
            "favorites.title": "Mes Recettes Favorites",
            "settings.title": "Paramètres",
            "settings.theme": "Thème:",
            "settings.light": "Clair",
            "settings.dark": "Sombre",
            "settings.notifications": "Notifications:",
            "settings.language": "Langue:",
            "settings.save": "Enregistrer",
            "recipe.ingredients": "Ingrédients",
            "recipe.preparation": "Préparation",
            "recipe.use": "Utilisation",
            "recipe.recommendations": "Recommandations",
            "recipe.warnings": "Avertissements",
            "recipe.schedule": "Calendrier d'Utilisation",
            "recipe.schedule.info": "Utilisez cette recette pendant <strong>{days}</strong> jours pour voir des résultats optimaux.",
            "recipe.schedule.days": "Jours utilisés: {used} de {total}",
            "recipe.comments": "Commentaires",
            "recipe.comments.add": "Ajouter un Commentaire",
            "recipe.comments.placeholder": "Écrivez votre commentaire ici...",
            "recipe.comments.submit": "Soumettre",
            "recipe.download": "Télécharger la Recette",
            "recipe.favorite.add": "Ajouter aux Favoris",
            "recipe.favorite.remove": "Retirer des Favoris",
            "comments.no": "Aucun commentaire pour l'instant. Soyez le premier à commenter.",
            "comments.author": "Auteur",
            "comments.date": "Date",
            "modal.close": "Fermer",
            "fullscreen": "Plein Écran",
            "progress": "Progrès: {percent}%"
        },
        de: {
            "app.title": "Hausmittel",
            "nav.all": "Alle",
            "nav.skin": "Haut",
            "nav.lips": "Lippen",
            "nav.hair": "Haare",
            "nav.masks": "Masken",
            "nav.hands": "Hände",
            "nav.nutrition": "Ernährung",
            "nav.wellness": "Wohlbefinden",
            "nav.favorites": "Favoriten",
            "nav.settings": "Einstellungen",
            "favorites.title": "Meine Lieblingsrezepte",
            "settings.title": "Einstellungen",
            "settings.theme": "Thema:",
            "settings.light": "Hell",
            "settings.dark": "Dunkel",
            "settings.notifications": "Benachrichtigungen:",
            "settings.language": "Sprache:",
            "settings.save": "Speichern",
            "recipe.ingredients": "Zutaten",
            "recipe.preparation": "Zubereitung",
            "recipe.use": "Verwendung",
            "recipe.recommendations": "Empfehlungen",
            "recipe.warnings": "Warnungen",
            "recipe.schedule": "Verwendungsplan",
            "recipe.schedule.info": "Verwenden Sie dieses Rezept für <strong>{days}</strong> Tage, um optimale Ergebnisse zu sehen.",
            "recipe.schedule.days": "Verwendete Tage: {used} von {total}",
            "recipe.comments": "Kommentare",
            "recipe.comments.add": "Kommentar Hinzufügen",
            "recipe.comments.placeholder": "Schreiben Sie hier Ihren Kommentar...",
            "recipe.comments.submit": "Senden",
            "recipe.download": "Rezept Herunterladen",
            "recipe.favorite.add": "Zu Favoriten Hinzufügen",
            "recipe.favorite.remove": "Aus Favoriten Entfernen",
            "comments.no": "Noch keine Kommentare. Seien Sie der Erste, der kommentiert.",
            "comments.author": "Autor",
            "comments.date": "Datum",
            "modal.close": "Schließen",
            "fullscreen": "Vollbild",
            "progress": "Fortschritt: {percent}%"
        },
        it: {
            "app.title": "Rimedi Casalinghi",
            "nav.all": "Tutte",
            "nav.skin": "Pelle",
            "nav.lips": "Labbra",
            "nav.hair": "Capelli",
            "nav.masks": "Maschere",
            "nav.hands": "Mani",
            "nav.nutrition": "Nutrizione",
            "nav.wellness": "Benessere",
            "nav.favorites": "Preferiti",
            "nav.settings": "Impostazioni",
            "favorites.title": "Le Mie Ricette Preferite",
            "settings.title": "Impostazioni",
            "settings.theme": "Tema:",
            "settings.light": "Chiaro",
            "settings.dark": "Scuro",
            "settings.notifications": "Notifiche:",
            "settings.language": "Lingua:",
            "settings.save": "Salva",
            "recipe.ingredients": "Ingredienti",
            "recipe.preparation": "Preparazione",
            "recipe.use": "Uso",
            "recipe.recommendations": "Raccomandazioni",
            "recipe.warnings": "Avvertenze",
            "recipe.schedule": "Programma di Utilizzo",
            "recipe.schedule.info": "Usa questa ricetta per <strong>{days}</strong> giorni per vedere risultati ottimali.",
            "recipe.schedule.days": "Giorni utilizzati: {used} di {total}",
            "recipe.comments": "Commenti",
            "recipe.comments.add": "Aggiungi Commento",
            "recipe.comments.placeholder": "Scrivi il tuo commento qui...",
            "recipe.comments.submit": "Invia",
            "recipe.download": "Scarica Ricetta",
            "recipe.favorite.add": "Aggiungi ai Preferiti",
            "recipe.favorite.remove": "Rimuovi dai Preferiti",
            "comments.no": "Nessun commento ancora. Sii il primo a commentare.",
            "comments.author": "Autore",
            "comments.date": "Data",
            "modal.close": "Chiudi",
            "fullscreen": "Schermo Intero",
            "progress": "Progresso: {percent}%"
        },
        zh: {
            "app.title": "家庭食谱",
            "nav.all": "全部",
            "nav.skin": "皮肤",
            "nav.lips": "嘴唇",
            "nav.hair": "头发",
            "nav.masks": "面膜",
            "nav.hands": "手",
            "nav.nutrition": "营养",
            "nav.wellness": "健康",
            "nav.favorites": "收藏",
            "nav.settings": "设置",
            "favorites.title": "我的收藏食谱",
            "settings.title": "设置",
            "settings.theme": "主题:",
            "settings.light": "浅色",
            "settings.dark": "深色",
            "settings.notifications": "通知:",
            "settings.language": "语言:",
            "settings.save": "保存",
            "recipe.ingredients": "成分",
            "recipe.preparation": "准备",
            "recipe.use": "使用",
            "recipe.recommendations": "建议",
            "recipe.warnings": "警告",
            "recipe.schedule": "使用时间表",
            "recipe.schedule.info": "使用此配方 <strong>{days}</strong> 天以获得最佳效果。",
            "recipe.schedule.days": "已用天数: {used} / {total}",
            "recipe.comments": "评论",
            "recipe.comments.add": "添加评论",
            "recipe.comments.placeholder": "在这里写下您的评论...",
            "recipe.comments.submit": "提交",
            "recipe.download": "下载食谱",
            "recipe.favorite.add": "添加到收藏",
            "recipe.favorite.remove": "从收藏中移除",
            "comments.no": "暂无评论。成为第一个评论的人。",
            "comments.author": "作者",
            "comments.date": "日期",
            "modal.close": "关闭",
            "fullscreen": "全屏",
            "progress": "进度: {percent}%"
        },
        ja: {
            "app.title": "家庭薬",
            "nav.all": "すべて",
            "nav.skin": "肌",
            "nav.lips": "唇",
            "nav.hair": "髪",
            "nav.masks": "マスク",
            "nav.hands": "手",
            "nav.nutrition": "栄養",
            "nav.wellness": "健康",
            "nav.favorites": "お気に入り",
            "nav.settings": "設定",
            "favorites.title": "お気に入りのレシピ",
            "settings.title": "設定",
            "settings.theme": "テーマ:",
            "settings.light": "ライト",
            "settings.dark": "ダーク",
            "settings.notifications": "通知:",
            "settings.language": "言語:",
            "settings.save": "保存",
            "recipe.ingredients": "材料",
            "recipe.preparation": "準備",
            "recipe.use": "使用方法",
            "recipe.recommendations": "推奨",
            "recipe.warnings": "警告",
            "recipe.schedule": "使用スケジュール",
            "recipe.schedule.info": "最適な結果を得るには、このレシピを <strong>{days}</strong> 日間使用してください。",
            "recipe.schedule.days": "使用日数: {used} / {total}",
            "recipe.comments": "コメント",
            "recipe.comments.add": "コメントを追加",
            "recipe.comments.placeholder": "ここにコメントを書いてください...",
            "recipe.comments.submit": "送信",
            "recipe.download": "レシピをダウンロード",
            "recipe.favorite.add": "お気に入りに追加",
            "recipe.favorite.remove": "お気に入りから削除",
            "comments.no": "まだコメントはありません。最初のコメントを書いてください。",
            "comments.author": "著者",
            "comments.date": "日付",
            "modal.close": "閉じる",
            "fullscreen": "全画面",
            "progress": "進捗: {percent}%"
        },
        ru: {
            "app.title": "Домашние Рецепты",
            "nav.all": "Все",
            "nav.skin": "Кожа",
            "nav.lips": "Губы",
            "nav.hair": "Волосы",
            "nav.masks": "Маски",
            "nav.hands": "Руки",
            "nav.nutrition": "Питание",
            "nav.wellness": "Здоровье",
            "nav.favorites": "Избранное",
            "nav.settings": "Настройки",
            "favorites.title": "Мои Избранные Рецепты",
            "settings.title": "Настройки",
            "settings.theme": "Тема:",
            "settings.light": "Светлая",
            "settings.dark": "Темная",
            "settings.notifications": "Уведомления:",
            "settings.language": "Язык:",
            "settings.save": "Сохранить",
            "recipe.ingredients": "Ингредиенты",
            "recipe.preparation": "Приготовление",
            "recipe.use": "Использование",
            "recipe.recommendations": "Рекомендации",
            "recipe.warnings": "Предупреждения",
            "recipe.schedule": "График Использования",
            "recipe.schedule.info": "Используйте этот рецепт в течение <strong>{days}</strong> дней для достижения оптимальных результатов.",
            "recipe.schedule.days": "Использовано дней: {used} из {total}",
            "recipe.comments": "Комментарии",
            "recipe.comments.add": "Добавить Комментарий",
            "recipe.comments.placeholder": "Напишите ваш комментарий здесь...",
            "recipe.comments.submit": "Отправить",
            "recipe.download": "Скачать Рецепт",
            "recipe.favorite.add": "Добавить в Избранное",
            "recipe.favorite.remove": "Удалить из Избранного",
            "comments.no": "Пока нет комментариев. Будьте первым, кто прокомментирует.",
            "comments.author": "Автор",
            "comments.date": "Дата",
            "modal.close": "Закрыть",
            "fullscreen": "Полный Экран",
            "progress": "Прогресс: {percent}%"
        },
        ar: {
            "app.title": "وصفات منزلية",
            "nav.all": "الكل",
            "nav.skin": "الجلد",
            "nav.lips": "الشفاه",
            "nav.hair": "الشعر",
            "nav.masks": "الأقنعة",
            "nav.hands": "الأيدي",
            "nav.nutrition": "التغذية",
            "nav.wellness": "الصحة",
            "nav.favorites": "المفضلة",
            "nav.settings": "الإعدادات",
            "favorites.title": "وصفاتي المفضلة",
            "settings.title": "الإعدادات",
            "settings.theme": "السمة:",
            "settings.light": "فاتح",
            "settings.dark": "داكن",
            "settings.notifications": "الإشعارات:",
            "settings.language": "اللغة:",
            "settings.save": "حفظ",
            "recipe.ingredients": "المكونات",
            "recipe.preparation": "التحضير",
            "recipe.use": "الاستخدام",
            "recipe.recommendations": "التوصيات",
            "recipe.warnings": "التحذيرات",
            "recipe.schedule": "جدول الاستخدام",
            "recipe.schedule.info": "استخدم هذه الوصفة لمدة <strong>{days}</strong> يومًا لرؤية النتائج المثلى.",
            "recipe.schedule.days": "الأيام المستخدمة: {used} من {total}",
            "recipe.comments": "التعليقات",
            "recipe.comments.add": "إضافة تعليق",
            "recipe.comments.placeholder": "اكتب تعليقك هنا...",
            "recipe.comments.submit": "إرسال",
            "recipe.download": "تحميل الوصفة",
            "recipe.favorite.add": "إضافة إلى المفضلة",
            "recipe.favorite.remove": "إزالة من المفضلة",
            "comments.no": "لا توجد تعليقات بعد. كن أول من يعلق.",
            "comments.author": "المؤلف",
            "comments.date": "التاريخ",
            "modal.close": "إغلاق",
            "fullscreen": "ملء الشاشة",
            "progress": "التقدم: {percent}%"
        }
    };

    // Datos de ejemplo (más de 25 recetas)
    const recetas = [
        {
            id: 1,
            titulo: "Mascarilla de miel y avena",
            categoria: "piel",
            imagen: 'https://cdn0.uncomo.com/es/posts/2/4/8/como_hacer_una_mascarilla_de_avena_y_miel_29842_orig.jpg',
            ingredientes: ["2 cucharadas de miel", "1 cucharada de avena en polvo", "1 cucharada de yogur natural"],
            preparacion: "Mezclar todos los ingredientes hasta obtener una pasta homogénea. Aplicar sobre el rostro limpio y dejar actuar 20 minutos. Enjuagar con agua tibia.",
            uso: "2 veces por semana",
            recomendaciones: "Ideal para pieles sensibles o con acné. La miel tiene propiedades antibacterianas y la avena calma la irritación.",
            advertencias: "No usar si eres alérgico a alguno de los ingredientes. Hacer una prueba en una pequeña zona de la piel antes de usar.",
            duracion: 7,
            tiempoRecomendado: 21,
            comentarios: []
        },
        {
            id: 2,
            titulo: "Bálsamo labial de cacao",
            categoria: "labios",
            imagen: 'https://mejorconsalud.as.com/wp-content/uploads/2015/01/balsamo.jpg',
            ingredientes: ["1 cucharada de cera de abejas", "1 cucharada de manteca de cacao", "1 cucharadita de aceite de coco"],
            preparacion: "Derretir la cera de abejas al baño María. Agregar la manteca de cacao y el aceite de coco. Mezclar bien y verter en un recipiente pequeño. Dejar enfriar hasta solidificar.",
            uso: "Aplicar en los labios cuando sea necesario",
            recomendaciones: "Mantiene los labios hidratados por horas. Puedes añadir una gota de vitamina E para extra nutrición.",
            advertencias: "Conservar en lugar fresco. Si notas irritación, discontinuar su uso.",
            duracion: 30,
            tiempoRecomendado: 60,
            comentarios: []
        },
        {
            id: 3,
            titulo: "Acondicionador de palta",
            categoria: "cabello",
            imagen: 'https://mejorconsalud.as.com/wp-content/uploads/2014/06/Aguacate-acondicionador.jpg?auto=webp&quality=7500&width=1920&crop=16:9,smart,safe&format=webp&optimize=medium&dpr=2&fit=cover&fm=webp&q=75&w=1920&h=1080',
            ingredientes: ["1/2 palta maduro", "1 cucharada de aceite de oliva", "1 cucharada de miel"],
            preparacion: "Machacar la palta hasta obtener un puré. Agregar el aceite de oliva y la miel. Mezclar bien. Aplicar sobre el cabello húmedo, dejar actuar 30 minutos y lavar normalmente.",
            uso: "1 vez por semana",
            recomendaciones: "Ideal para cabellos secos o dañados. la palta aporta grasas saludables que nutren el cabello.",
            advertencias: "Enjuagar bien para evitar residuos. No usar si tienes el cuero cabelludo muy graso.",
            duracion: 14,
            tiempoRecomendado: 30,
            comentarios: []
        },
        // Agregar más recetas aquí (mínimo 25 en total)
        {
            id: 4,
            titulo: "Exfoliante de café y azúcar",
            categoria: "piel",
            imagen: 'https://media.istockphoto.com/id/1212541934/es/foto/hacer-cero-residuos-exfoliaci%C3%B3n-corporal-libre-t%C3%B3xica-caf%C3%A9-diy-az%C3%BAcar-exfoliante-corporal-de.jpg?s=612x612&w=0&k=20&c=pMT1Gc2cQqw1ulmqqbJ4PMC1jRkixdu3HOMSyKOk42o=',
            ingredientes: ["2 cucharadas de café molido", "2 cucharadas de azúcar morena", "1 cucharada de aceite de coco"],
            preparacion: "Mezclar todos los ingredientes hasta obtener una pasta. Masajear sobre la piel húmeda con movimientos circulares. Enjuagar con agua tibia.",
            uso: "1 vez por semana",
            recomendaciones: "Elimina células muertas y activa la circulación. El café ayuda a reducir la celulitis.",
            advertencias: "No usar en piel irritada o con cortaduras. Evitar el área de los ojos.",
            duracion: 7,
            tiempoRecomendado: 28,
            comentarios: []
        },
        {
            id: 5,
            titulo: "Tónico de manzanilla",
            categoria: "piel",
            imagen: 
          'https://cloudfront-us-east-1.images.arcpublishing.com/eluniversal/S4D6E2CGKVGARARAXKC2USXOX4.jpg',
            ingredientes: ["1 taza de agua", "2 bolsitas de té de manzanilla", "1 cucharada de vinagre de manzana"],
            preparacion: "Hervir el agua y añadir las bolsitas de té. Dejar enfriar. Agregar el vinagre de manzana. Guardar en un frasco limpio.",
            uso: "Aplicar con un algodón después de lavar el rostro",
            recomendaciones: "Calma la piel y equilibra el pH. Ideal para pieles sensibles o con rosácea.",
            advertencias: "Conservar en refrigeración. Usar dentro de los 5 días.",
            duracion: 5,
            tiempoRecomendado: 30,
            comentarios: []
        },
        {
            id: 6,
            titulo: "Mascarilla de plátano para cabello",
            categoria: "cabello",
            imagen: 'https://www.cocinavital.mx/wp-content/uploads/2019/02/mascarilla-platano-miel-cabello-sedoso.jpg',
            ingredientes: ["1 plátano maduro", "1 huevo", "1 cucharada de miel"],
            preparacion: "Machacar el plátano hasta obtener un puré sin grumos. Agregar el huevo y la miel. Mezclar bien. Aplicar sobre el cabello húmedo, dejar actuar 30 minutos y lavar normalmente.",
            uso: "1 vez por semana",
            recomendaciones: "El plátano aporta potasio que fortalece el cabello. El huevo aporta proteínas.",
            advertencias: "Enjuagar bien con agua fría para que el huevo no se cuaje. No usar si tienes alergia al huevo.",
            duracion: 7,
            tiempoRecomendado: 21,
            comentarios: []
        },
        {
            id: 7,
            titulo: "Crema de manos de caléndula",
            categoria: "manos",
            imagen: 'https://cdn0.uncomo.com/es/posts/6/8/5/como_hacer_crema_de_calendula_en_casa_43586_orig.jpg',
            ingredientes: ["1/4 taza de aceite de coco", "2 cucharadas de cera de abejas", "1 cucharada de infusión de caléndula"],
            preparacion: "Derretir la cera de abejas y el aceite de coco al baño María. Agregar la infusión de caléndula. Verter en un frasco y dejar enfriar.",
            uso: "Aplicar en las manos cuando sea necesario",
            recomendaciones: "La caléndula tiene propiedades antiinflamatorias y cicatrizantes. Ideal para manos agrietadas.",
            advertencias: "Conservar en lugar fresco. Si notas irritación, discontinuar su uso.",
            duracion: 30,
            tiempoRecomendado: 60,
            comentarios: []
        },
        {
            id: 8,
            titulo: "Bebida detox de jengibre y limón",
            categoria: "nutricion",
            imagen: 'https://live.hsmob.io/storage/images/recetaslight.adelgazar.net/recetaslight.adelgazar.net_wp-content_agua-detox-limon-pepino.jpg',
            ingredientes: ["1 trozo de jengibre fresco", "1 limón", "1 litro de agua", "1 cucharada de miel (opcional)"],
            preparacion: "Cortar el jengibre en rodajas finas. Hervir el agua y añadir el jengibre. Dejar reposar 10 minutos. Añadir el jugo de limón y la miel si se desea.",
            uso: "Tomar 1 vaso en ayunas",
            recomendaciones: "Ayuda a depurar el organismo y mejorar la digestión. El jengibre tiene propiedades antiinflamatorias.",
            advertencias: "No consumir si tienes úlceras o gastritis. Consultar a un médico si estás embarazada.",
            duracion: 1,
            tiempoRecomendado: 30,
            comentarios: []
        },
        {
            id: 9,
            titulo: "Aceite relajante de lavanda",
            categoria: "bienestar",
            imagen: 'https://granvelada.com/blog/wp-content/uploads/2015/03/aceite-de-lavanda-casero.jpg',
            ingredientes: ["1/2 taza de aceite de almendras", "10 gotas de aceite esencial de lavanda"],
            preparacion: "Mezclar el aceite de almendras con el aceite esencial de lavanda. Guardar en un frasco oscuro.",
            uso: "Masajear sobre el cuerpo o añadir al agua del baño",
            recomendaciones: "La lavanda tiene propiedades relajantes que ayudan a combatir el estrés y mejorar el sueño.",
            advertencias: "No usar en piel irritada. Evitar el contacto con los ojos. No ingerir.",
            duracion: 90,
            tiempoRecomendado: 120,
            comentarios: []
        },
        {
            id: 10,
            titulo: "Mascarilla de arcilla verde",
            categoria: "mascarillas",
            imagen: 
          'https://argileduvelay.com/wp-content/uploads/2022/10/masque-visage-argile-verte-argile-du-velay.jpg',
            ingredientes: ["2 cucharadas de arcilla verde", "agua mineral o floral"],
            preparacion: "Mezclar la arcilla con agua hasta obtener una pasta homogénea. Aplicar sobre el rostro limpio, evitando el contorno de ojos. Dejar actuar 15 minutos y retirar con agua tibia.",
            uso: "1 vez por semana",
            recomendaciones: "Purifica la piel y absorbe el exceso de grasa. Ideal para pieles mixtas o grasas.",
            advertencias: "No dejar que la mascarilla se seque completamente. Si la piel se enrojece, aplicar menos tiempo.",
            duracion: 7,
            tiempoRecomendado: 28,
            comentarios: []
        },   
        {
            id: 11,
            titulo: "Tónico de té verde",
            categoria: "piel",
            imagen: 'https://ajedrea.com/wp-content/uploads/2013/03/como-hacer-hammamelis.jpg',
            ingredientes: ["1 taza de agua", "1 bolsita de té verde", "1 cucharada de hamamelis"],
            preparacion: "Preparar el té verde y dejar enfriar. Agregar el hamamelis. Guardar en un frasco limpio.",
            uso: "Aplicar con un algodón después de lavar el rostro",
            recomendaciones: "El té verde tiene antioxidantes que combaten el envejecimiento. El hamamelis es astringente.",
            advertencias: "Conservar en refrigeración. Usar dentro de los 5 días.",
            duracion: 5,
            tiempoRecomendado: 30,
            comentarios: []
        },
        {
            id: 12,
            titulo: "Bálsamo labial de betún",
            categoria: "labios",
            imagen: 'https://cdn0.uncomo.com/es/posts/0/8/7/como_hacer_balsamo_labial_con_manteca_de_karite_40780_600.jpg',
            ingredientes: ["1 cucharada de manteca de karité", "1 cucharada de cera de abejas", "1 cucharadita de aceite de vitamina E"],
            preparacion: "Derretir la manteca de karité y la cera de abejas al baño María. Agregar el aceite de vitamina E. Verter en un recipiente pequeño y dejar enfriar.",
            uso: "Aplicar en los labios cuando sea necesario",
            recomendaciones: "Mantiene los labios hidratados y protegidos. La vitamina E ayuda a reparar la piel.",
            advertencias: "Conservar en lugar fresco. Si notas irritación, discontinuar su uso.",
            duracion: 60,
            tiempoRecomendado: 90,
            comentarios: []
        },
        {
            id: 13,
            titulo: "Acondicionador de yogur y miel",
            categoria: "cabello",
            imagen: 'https://okdiario.com/img/2019/12/20/mascarilla-de-miel-y-yogur-para-el-cabello.jpg',
            ingredientes: ["1/2 taza de yogur natural", "1 cucharada de miel", "1 huevo"],
            preparacion: "Mezclar el yogur, la miel y el huevo hasta obtener una mezcla homogénea. Aplicar sobre el cabello húmedo, dejar actuar 20 minutos y lavar normalmente.",
            uso: "1 vez por semana",
            recomendaciones: "El yogur ayuda a suavizar el cabello. La miel aporta brillo y el huevo proteínas.",
            advertencias: "Enjuagar bien con agua fría para que el huevo no se cuaje. No usar si tienes alergia al huevo.",
            duracion: 7,
            tiempoRecomendado: 21,
            comentarios: []
        },
        {
            id: 14,
            titulo: "Exfoliante de azúcar y limón",
            categoria: "piel",
            imagen: 'https://i0.wp.com/evaevuxxy.com/wp-content/uploads/2017/09/lemon-91537_640.jpg?resize=697%2C464',
            ingredientes: ["2 cucharadas de azúcar", "1 cucharada de aceite de oliva", "1/2 limón"],
            preparacion: "Mezclar el azúcar con el aceite de oliva. Añadir el jugo de medio limón. Mezclar bien. Masajear sobre la piel húmeda con movimientos circulares. Enjuagar con agua tibia.",
            uso: "1 vez por semana",
            recomendaciones: "Elimina células muertas y aclara la piel. El limón tiene propiedades blanqueadoras.",
            advertencias: "No usar en piel sensible o irritada. Evitar la exposición al sol después de usar.",
            duracion: 7,
            tiempoRecomendado: 28,
            comentarios: []
        },
        {
            id: 15,
            titulo: "Mascarilla de papaya",
            categoria: "piel",
            imagen: 'https://media.mdzol.com/p/9ed3a192a9814211ac6a119a826675be/adjuntos/373/imagenes/001/026/0001026550/760x0/smart/muchas-mascarillas-ingredientes-naturales-producen-increibles-resultados-la-piel-foto-gastrolab.png',
            ingredientes: ["1/4 taza de papaya madura", "1 cucharada de miel"],
            preparacion: "Machacar la papaya hasta obtener un puré. Agregar la miel y mezclar bien. Aplicar sobre el rostro limpio, dejar actuar 20 minutos y enjuagar.",
            uso: "1 vez por semana",
            recomendaciones: "La papaya contiene enzimas que exfolian suavemente la piel. La miel hidrata y nutre.",
            advertencias: "No usar si eres alérgico a la papaya. Hacer una prueba en una pequeña zona de la piel antes de usar.",
            duracion: 7,
            tiempoRecomendado: 21,
            comentarios: []
        },
        {
            id: 16,
            titulo: "Bálsamo labial de menta",
            categoria: "labios",
            imagen: 'https://spacionatural.cl/cdn/shop/articles/Balsamo-labial-vegano-1024x819-1_1a812749-5872-4f77-8370-8fc405c4913e.jpg?v=1737486272&width=2048',
            ingredientes: ["1 cucharada de cera de abejas", "1 cucharada de aceite de coco", "3 gotas de aceite esencial de menta"],
            preparacion: "Derretir la cera de abejas y el aceite de coco al baño María. Agregar el aceite esencial de menta. Verter en un recipiente pequeño y dejar enfriar.",
            uso: "Aplicar en los labios cuando sea necesario",
            recomendaciones: "La menta refresca los labios y alivia la sensación de sequedad.",
            advertencias: "Conservar en lugar fresco. Si notas irritación, discontinuar su uso.",
            duracion: 30,
            tiempoRecomendado: 60,
            comentarios: []
        },
        {
            id: 17,
            titulo: "Acondicionador de aloe vera",
            categoria: "cabello",
            imagen: 'https://www.foamie.mx/cdn/shop/products/aloeveraplanta.jpg?v=1622130728',
            ingredientes: ["1/2 taza de gel de aloe vera", "2 cucharadas de aceite de coco", "1 cucharada de miel"],
            preparacion: "Mezclar todos los ingredientes hasta obtener una mezcla homogénea. Aplicar sobre el cabello húmedo, dejar actuar 30 minutos y lavar normalmente.",
            uso: "1 vez por semana",
            recomendaciones: "El aloe vera hidrata y repara el cabello dañado. El aceite de coco nutre profundamente.",
            advertencias: "Enjuagar bien para evitar residuos. No usar si tienes el cuero cabelludo muy graso.",
            duracion: 14,
            tiempoRecomendado: 30,
            comentarios: []
        },
        {
            id: 18,
            titulo: "Crema de manos de avena",
            categoria: "manos",
            imagen: 'https://www.laprensa.hn/binrepository/1160x580/70c0/1020d580/none/11004/YWCD/manos.11_LP892452_MG80208532.jpg',
            ingredientes: ["1/4 taza de avena en polvo", "1/4 taza de agua caliente", "2 cucharadas de aceite de oliva"],
            preparación: "Mezclar la avena con el agua caliente hasta formar una pasta. Agregar el aceite de oliva y mezclar bien. Aplicar sobre las manos y dejar actuar 15 minutos. Enjuagar.",
            uso: "2 veces por semana",
            recomendaciones: "La avena calma la piel irritada y el aceite de oliva hidrata profundamente.",
            advertencias: "Si tienes alergia a la avena, no usar esta receta.",
            duracion: 7,
            tiempoRecomendado: 21,
            comentarios: []
        },
        {
            id: 19,
            titulo: "Bebida energética de espinacas",
            categoria: "nutricion",
            imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWbqbe8Bd13O1Q_k3LY9Z8BC-d2sDsunw0WOCtu0dzram1AP4Ld9fZJC93zZ-Sk-1-DaqpVZ3KlZMh5oxjALwLdvgKY231ekMFGHAg400d-1UYIUCN2ffXhll0ehgVNlnMQXrUKsMdeOM/s1600/Pl%C3%A1tano+y+espinacas.jpg',
            ingredientes: ["1 taza de espinacas frescas", "1 plátano", "1 taza de leche de almendras", "1 cucharada de miel"],
            preparacion: "Licuar todos los ingredientes hasta obtener una mezcla homogénea. Servir inmediatamente.",
            uso: "Tomar 1 vaso en la mañana",
            recomendaciones: "Las espinacas aportan hierro y vitaminas. El plátano da energía natural.",
            advertencias: "No consumir si eres alérgico a alguno de los ingredientes. Consultar a un médico si tienes problemas renales.",
            duracion: 1,
            tiempoRecomendado: 7,
            comentarios: []
        },
        {
            id: 20,
            titulo: "Aceite de masaje con canela",
            categoria: "bienestar",
            imagen: 'https://www.mundoaceitedeoliva.com/wp-content/uploads/2024/01/Frasco-de-vidrio-para-conservar-aceite-aromatizado-1024x585.jpg',
            ingredientes: ["1/2 taza de aceite de coco", "1 cucharadita de canela en polvo", "5 gotas de aceite esencial de naranja"],
            preparacion: "Calentar ligeramente el aceite de coco. Agregar la canela y el aceite esencial de naranja. Mezclar bien.",
            uso: "Masajear sobre el cuerpo",
            recomendaciones: "La canela mejora la circulación y la naranja eleva el ánimo. Ideal para masajes relajantes.",
            advertencias: "No usar en piel sensible o irritada. Evitar el contacto con los ojos. No ingerir.",
            duracion: 30,
            tiempoRecomendado: 60,
            comentarios: []
        },
        {
            id: 21,
            titulo: "Mascarilla de yogur y fresa",
            categoria: "mascarillas",
            imagen: 'https://i.pinimg.com/736x/14/52/f1/1452f15aebe8efcfba445e1d1a185319.jpg',
            ingredientes: ["3 fresas maduras", "2 cucharadas de yogur natural", "1 cucharada de miel"],
            preparacion: "Machacar las fresas hasta obtener un puré. Agregar el yogur y la miel. Mezclar bien. Aplicar sobre el rostro limpio, dejar actuar 15 minutos y enjuagar.",
            uso: "1 vez por semana",
            recomendaciones: "Las fresas contienen ácido salicílico que exfolia la piel. El yogur y la miel hidratan.",
            advertencias: "No usar si eres alérgico a las fresas. Hacer una prueba en una pequeña zona de la piel antes de usar.",
            duracion: 7,
            tiempoRecomendado: 21,
            comentarios: []
        },
        {
            id: 22,
            titulo: "Tónico de pepino",
            categoria: "piel",
            imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/44CVWVB73FHGTO6WUUZOFZ5I3I.jpg',
            ingredientes: ["1/2 pepino", "1/4 taza de agua de rosas"],
            preparacion: "Licuar el pepino y colar el jugo. Mezclar con el agua de rosas. Guardar en un frasco limpio.",
            uso: "Aplicar con un algodón después de lavar el rostro",
            recomendaciones: "El pepino refresca y calma la piel. El agua de rosas equilibra el pH.",
            advertencias: "Conservar en refrigeración. Usar dentro de los 3 días.",
            duracion: 3,
            tiempoRecomendado: 14,
            comentarios: []
        },
        {
            id: 23,
            titulo: "Bálsamo labial de cacao y vainilla",
            categoria: "labios",
            imagen: 'https://www.esturirafi.com/wp-content/uploads/2019/11/como-hacer-balsamo-labial-receta-casero.jpg',
            ingredientes: ["1 cucharada de manteca de cacao", "1 cucharada de cera de abejas", "1/2 cucharadita de extracto de vainilla"],
            preparacion: "Derretir la manteca de cacao y la cera de abejas al baño María. Agregar el extracto de vainilla. Verter en un recipiente pequeño y dejar enfriar.",
            uso: "Aplicar en los labios cuando sea necesario",
            recomendaciones: "Mantiene los labios hidratados y con un aroma agradable a vainilla.",
            advertencias: "Conservar en lugar fresco. Si notas irritación, discontinuar su uso.",
            duracion: 45,
            tiempoRecomendado: 90,
            comentarios: []
        },
        {
            id: 24,
            titulo: "Acondicionador de palta y mayonesa",
            categoria: "cabello",
            imagen: 'https://naghab.com/wp-content/uploads/2022/03/mascarilla-de-palta-y-mayonesa-para-cabello-maltratado.jpg',
            ingredientes: ["1/2 palta maduro", "2 cucharadas de mayonesa", "1 cucharada de aceite de oliva"],
            preparacion: "Machacar la palta hasta obtener un puré. Agregar la mayonesa y el aceite de oliva. Mezclar bien. Aplicar sobre el cabello húmedo, dejar actuar 30 minutos y lavar normalmente.",
            uso: "1 vez por semana",
            recomendaciones: "la palta y la mayonesa aportan grasas que nutren profundamente el cabello seco.",
            advertencias: "Enjuagar bien para evitar residuos. No usar si tienes el cuero cabelludo muy graso.",
            duracion: 14,
            tiempoRecomendado: 30,
            comentarios: []
        },
        {
            id: 25,
            titulo: "Exfoliante de sal marina",
            categoria: "piel",
            imagen: 'https://cdn0.uncomo.com/es/posts/9/8/1/como_exfoliar_la_piel_con_sal_marina_45189_orig.jpg',
            ingredientes: ["2 cucharadas de sal marina", "1 cucharada de aceite de almendras", "1 cucharadita de jugo de limón"],
            preparacion: "Mezclar la sal marina con el aceite de almendras. Agregar el jugo de limón. Mezclar bien. Masajear sobre la piel húmeda con movimientos circulares. Enjuagar con agua tibia.",
            uso: "1 vez por semana",
            recomendaciones: "La sal marina elimina células muertas y mejora la circulación. El limón aclara la piel.",
            advertencias: "No usar en piel sensible o irritada. Evitar la exposición al sol después de usar.",
            duracion: 7,
            tiempoRecomendado: 28,
            comentarios: []
        },
        {
            id: 26,
            titulo: "Mascarilla de zanahoria",
            categoria: "piel",
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQq2bafoRXEr08hFS60B8pmxZbam4WMJQrp2VWWxOvPQp-20QzbjTLHP_ed214fvXcINo&usqp=CAU',
            ingredientes: ["1 zanahoria pequeña cocida", "1 cucharada de miel", "1 cucharada de yogur natural"],
            preparacion: "Machacar la zanahoria cocida hasta obtener un puré. Agregar la miel y el yogur. Mezclar bien. Aplicar sobre el rostro limpio, dejar actuar 20 minutos y enjuagar.",
            uso: "1 vez por semana",
            recomendaciones: "La zanahoria aporta betacarotenos que dan brillo a la piel. La miel y el yogur hidratan.",
            advertencias: "No usar si eres alérgico a la zanahoria. Hacer una prueba en una pequeña zona de la piel antes de usar.",
            duracion: 7,
            tiempoRecomendado: 21,
            comentarios: []
        }
    ];

    // Elementos del DOM
    const recetasContainer = document.getElementById('recetas-container');
    const modalReceta = document.getElementById('modal-receta');
    const modalFavoritos = document.getElementById('modal-favoritos');
    const modalConfig = document.getElementById('modal-config');
    const detalleReceta = document.getElementById('detalle-receta');
    const favoritosContainer = document.getElementById('favoritos-container');
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const favoritosBtn = document.getElementById('favoritos-btn');
    const configBtn = document.getElementById('config-btn');
    const saveConfigBtn = document.getElementById('save-config');
    const closeBtns = document.querySelectorAll('.close');
    const categoryLinks = document.querySelectorAll('[data-category]');
    
    // Estado de la aplicación
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let recetasFiltradas = [...recetas];
    let currentCategory = 'todas';
    let currentLanguage = localStorage.getItem('language') || 'es';
    let currentTheme = localStorage.getItem('theme') || 'light';
    let isFullscreen = false;
    
    // Inicialización
    applyLanguage(currentLanguage);
    applyTheme(currentTheme);
    renderRecetas(recetasFiltradas);
    
    // Funciones de internacionalización
    function applyLanguage(lang) {
        currentLanguage = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Actualizar el selector de idioma
        document.getElementById('language').value = lang;
    }
    
    function t(key, params = {}) {
        let text = translations[currentLanguage][key] || translations['es'][key] || key;
        
        // Reemplazar parámetros
        Object.keys(params).forEach(param => {
            text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
        });
        
        return text;
    }
    
    // Funciones de tema
    function applyTheme(theme) {
        currentTheme = theme;
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        
        // Actualizar el selector de tema
        document.getElementById('theme').value = theme;
    }
    
    // Función de pantalla completa
    function toggleFullscreen() {
        if (!isFullscreen) {
            if (modalReceta.requestFullscreen) {
                modalReceta.requestFullscreen();
            } else if (modalReceta.webkitRequestFullscreen) {
                modalReceta.webkitRequestFullscreen();
            } else if (modalReceta.msRequestFullscreen) {
                modalReceta.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        isFullscreen = !isFullscreen;
    }
    
    // Event Listeners
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    favoritosBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarFavoritos();
    });
    
    configBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalConfig.style.display = 'block';
    });
    
    saveConfigBtn.addEventListener('click', () => {
        const theme = document.getElementById('theme').value;
        const notifications = document.getElementById('notifications').checked;
        const language = document.getElementById('language').value;
        
        // Guardar configuración
        localStorage.setItem('config', JSON.stringify({
            theme,
            notifications,
            language
        }));
        
        // Aplicar tema e idioma
        applyTheme(theme);
        applyLanguage(language);
        
        alert(t('settings.save'));
        modalConfig.style.display = 'none';
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalReceta.style.display = 'none';
            modalFavoritos.style.display = 'none';
            modalConfig.style.display = 'none';
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modalReceta) {
            modalReceta.style.display = 'none';
        }
        if (e.target === modalFavoritos) {
            modalFavoritos.style.display = 'none';
        }
        if (e.target === modalConfig) {
            modalConfig.style.display = 'none';
        }
    });
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            currentCategory = category;
            
            // Actualizar enlace activo
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Filtrar recetas
            if (category === 'todas') {
                recetasFiltradas = [...recetas];
            } else {
                recetasFiltradas = recetas.filter(receta => receta.categoria === category);
            }
            
            renderRecetas(recetasFiltradas);
        });
    });
    
    // Funciones
    function renderRecetas(recetas) {
        recetasContainer.innerHTML = '';
        
        recetas.forEach(receta => {
            const isFavorito = favoritos.some(fav => fav.id === receta.id);
            
            const recetaCard = document.createElement('div');
            recetaCard.className = 'receta-card';
            recetaCard.innerHTML = `
                <img src="${receta.imagen}" alt="${receta.titulo}" class="receta-img">
                <div class="receta-info">
                    <h3 class="receta-title">${receta.titulo}</h3>
                    <span class="receta-category">${receta.categoria}</span>
                    <div class="receta-actions">
                        <button class="btn btn-primary" data-id="${receta.id}">${t('recipe.download')}</button>
                        <button class="btn ${isFavorito ? 'btn-danger' : 'btn-primary'}" data-id="${receta.id}" data-favorito>${isFavorito ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'}</button>
                    </div>
                </div>
            `;
            
            recetasContainer.appendChild(recetaCard);
        });
        
        // Agregar event listeners a los botones
        document.querySelectorAll('.receta-card button[data-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const recetaId = parseInt(btn.getAttribute('data-id'));
                const receta = recetas.find(r => r.id === recetaId);
                
                if (btn.hasAttribute('data-favorito')) {
                    toggleFavorito(receta);
                } else {
                    mostrarDetalleReceta(receta);
                }
            });
        });
    }
    
    function mostrarDetalleReceta(receta) {
        const isFavorito = favoritos.some(fav => fav.id === receta.id);
        
        detalleReceta.innerHTML = `
            <div class="detalle-header">
                <img src="${receta.imagen}" alt="${receta.titulo}" class="detalle-img">
                <div class="detalle-info">
                    <h2>${receta.titulo}</h2>
                    <span class="category">${receta.categoria}</span>
                    <div class="receta-actions">
                        <button class="btn btn-primary" id="descargar-receta">${t('recipe.download')}</button>
                        <button class="btn ${isFavorito ? 'btn-danger' : 'btn-primary'}" id="toggle-favorito">${isFavorito ? t('recipe.favorite.remove') : t('recipe.favorite.add')}</button>
                        <button class="btn btn-primary" id="fullscreen-btn"><i class="fas fa-expand"></i> ${t('fullscreen')}</button>
                    </div>
                </div>
            </div>
            
            <div class="detalle-section">
                <h3>${t('recipe.ingredients')}</h3>
                <ul>
                    ${receta.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detalle-section">
                <h3>${t('recipe.preparation')}</h3>
                <p>${receta.preparacion}</p>
            </div>
            
            <div class="detalle-section">
                <h3>${t('recipe.use')}</h3>
                <p>${receta.uso}</p>
            </div>
            
            <div class="detalle-section">
                <h3>${t('recipe.recommendations')}</h3>
                <p>${receta.recomendaciones}</p>
            </div>
            
            <div class="detalle-section">
                <h3>${t('recipe.warnings')}</h3>
                <p>${receta.advertencias}</p>
            </div>
            
            <div class="cronograma">
                <h3>${t('recipe.schedule')}</h3>
                <p class="cronograma-info">${t('recipe.schedule.info', {days: receta.tiempoRecomendado})}</p>
                <div class="dias-container" id="dias-container">
                    ${generarDiasCronograma(receta.id, receta.tiempoRecomendado)}
                </div>
                <div class="progreso-bar">
                    <div class="progreso-fill" id="progreso-fill"></div>
                </div>
                <div class="cronograma-info">
                    <p>${t('recipe.schedule.days', {used: '<span id="dias-usados">0</span>', total: receta.tiempoRecomendado})}</p>
                    <p id="progreso-text">${t('progress', {percent: 0})}</p>
                </div>
            </div>
            
            <div class="comentarios-section">
                <h3>${t('recipe.comments')}</h3>
                <div id="comentarios-container">
                    ${renderComentarios(receta.comentarios)}
                </div>
                <div class="nuevo-comentario">
                    <h4>${t('recipe.comments.add')}</h4>
                    <textarea id="nuevo-comentario-texto" placeholder="${t('recipe.comments.placeholder')}"></textarea>
                    <button id="agregar-comentario">${t('recipe.comments.submit')}</button>
                </div>
            </div>
        `;
        
        modalReceta.style.display = 'block';
        
        // Event listeners para los botones
        document.getElementById('descargar-receta').addEventListener('click', () => {
            descargarReceta(receta);
        });
        
        document.getElementById('toggle-favorito').addEventListener('click', () => {
            toggleFavorito(receta);
            mostrarDetalleReceta(receta); // Actualizar la vista
        });
        
        document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
        
        // Event listeners para los días del cronograma
        document.querySelectorAll('.dia').forEach(dia => {
            dia.addEventListener('click', () => {
                const recetaId = parseInt(dia.getAttribute('data-receta-id'));
                const diaNumero = parseInt(dia.getAttribute('data-dia'));
                
                toggleDiaCronograma(recetaId, diaNumero);
            });
        });
        
        // Event listener para agregar comentario
        document.getElementById('agregar-comentario').addEventListener('click', () => {
            const texto = document.getElementById('nuevo-comentario-texto').value.trim();
            if (texto) {
                agregarComentario(receta.id, texto);
                document.getElementById('nuevo-comentario-texto').value = '';
                mostrarDetalleReceta(receta); // Actualizar la vista
            }
        });
        
        // Actualizar contador de días usados y barra de progreso
        actualizarProgreso(receta.id, receta.tiempoRecomendado);
    }
    
    function generarDiasCronograma(recetaId, totalDias) {
        let html = '';
        const cronograma = JSON.parse(localStorage.getItem(`cronograma-${recetaId}`)) || [];
        
        for (let i = 1; i <= totalDias; i++) {
            const usado = cronograma.includes(i);
            html += `<div class="dia ${usado ? 'used' : ''}" data-receta-id="${recetaId}" data-dia="${i}">${i}</div>`;
        }
        
        return html;
    }
    
    function toggleDiaCronograma(recetaId, dia) {
        let cronograma = JSON.parse(localStorage.getItem(`cronograma-${recetaId}`)) || [];
        
        if (cronograma.includes(dia)) {
            cronograma = cronograma.filter(d => d !== dia);
        } else {
            cronograma.push(dia);
        }
        
        localStorage.setItem(`cronograma-${recetaId}`, JSON.stringify(cronograma));
        
        // Actualizar la vista
        const diaElement = document.querySelector(`.dia[data-receta-id="${recetaId}"][data-dia="${dia}"]`);
        if (diaElement) {
            diaElement.classList.toggle('used');
        }
        
        // Actualizar progreso
        const receta = recetas.find(r => r.id === recetaId);
        if (receta) {
            actualizarProgreso(recetaId, receta.tiempoRecomendado);
        }
    }
    
    function actualizarProgreso(recetaId, totalDias) {
        const cronograma = JSON.parse(localStorage.getItem(`cronograma-${recetaId}`)) || [];
        const diasUsados = cronograma.length;
        const porcentaje = Math.round((diasUsados / totalDias) * 100);
        
        const diasUsadosElement = document.getElementById('dias-usados');
        const progresoFillElement = document.getElementById('progreso-fill');
        const progresoTextElement = document.getElementById('progreso-text');
        
        if (diasUsadosElement) {
            diasUsadosElement.textContent = diasUsados;
        }
        
        if (progresoFillElement) {
            progresoFillElement.style.width = `${porcentaje}%`;
        }
        
        if (progresoTextElement) {
            progresoTextElement.textContent = t('progress', {percent: porcentaje});
        }
    }
    
    function toggleFavorito(receta) {
        const index = favoritos.findIndex(fav => fav.id === receta.id);
        
        if (index !== -1) {
            favoritos.splice(index, 1);
        } else {
            favoritos.push(receta);
        }
        
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        renderRecetas(recetasFiltradas);
    }
    
    function mostrarFavoritos() {
        favoritosContainer.innerHTML = '';
        
        if (favoritos.length === 0) {
            favoritosContainer.innerHTML = '<p>No tienes recetas favoritas aún.</p>';
        } else {
            favoritos.forEach(receta => {
                const favoritoItem = document.createElement('div');
                favoritoItem.className = 'favorito-item';
                favoritoItem.innerHTML = `
                    <img src="${receta.imagen}" alt="${receta.titulo}">
                    <div>
                        <h4>${receta.titulo}</h4>
                        <span>${receta.categoria}</span>
                        <button class="btn btn-primary" data-id="${receta.id}">${t('recipe.download')}</button>
                        <button class="btn btn-danger" data-id="${receta.id}">${t('recipe.favorite.remove')}</button>
                    </div>
                `;
                
                favoritosContainer.appendChild(favoritoItem);
            });
            
            // Agregar event listeners
            document.querySelectorAll('#favoritos-container button').forEach(btn => {
                btn.addEventListener('click', () => {
                    const recetaId = parseInt(btn.getAttribute('data-id'));
                    const receta = favoritos.find(r => r.id === recetaId);
                    
                    if (btn.textContent === t('recipe.download')) {
                        modalFavoritos.style.display = 'none';
                        descargarReceta(receta);
                    } else {
                        toggleFavorito(receta);
                        mostrarFavoritos();
                    }
                });
            });
        }
        
        modalFavoritos.style.display = 'block';
    }
    
    function descargarReceta(receta) {
        const contenido = `
${t('recipe.ingredients')}:
${receta.ingredientes.map(ing => `- ${ing}`).join('\n')}

${t('recipe.preparation')}:
${receta.preparacion}

${t('recipe.use')}:
${receta.uso}

${t('recipe.recommendations')}:
${receta.recomendaciones}

${t('recipe.warnings')}:
${receta.advertencias}

${t('recipe.schedule.info', {days: receta.tiempoRecomendado})}
        `;
        
        const blob = new Blob([contenido], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${receta.titulo.replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    function renderComentarios(comentarios) {
        if (comentarios.length === 0) {
            return `<p>${t('comments.no')}</p>`;
        }
        
        return comentarios.map(comentario => `
            <div class="comentario">
                <div class="autor">${t('comments.author')}: ${comentario.autor}</div>
                <div class="fecha">${t('comments.date')}: ${comentario.fecha}</div>
                <p class="texto">${comentario.texto}</p>
            </div>
        `).join('');
    }
    
    function agregarComentario(recetaId, texto) {
        const receta = recetas.find(r => r.id === recetaId);
        if (receta) {
            const nuevoComentario = {
                autor: "Usuario Anónimo",
                fecha: new Date().toLocaleDateString(),
                texto: texto
            };
            
            receta.comentarios.push(nuevoComentario);
            
            // Actualizar en localStorage
            localStorage.setItem('recetas', JSON.stringify(recetas));
        }
    }
    
    // Cargar configuración guardada
    const config = JSON.parse(localStorage.getItem('config')) || {};
    if (config.theme) {
        applyTheme(config.theme);
    }
    if (config.language) {
        applyLanguage(config.language);
    }
    document.getElementById('notifications').checked = config.notifications || false;
    
    // Detectar cambios en pantalla completa
    document.addEventListener('fullscreenchange', () => {
        isFullscreen = !!(document.fullscreenElement || 
                          document.webkitFullscreenElement || 
                          document.msFullscreenElement);
    });
});