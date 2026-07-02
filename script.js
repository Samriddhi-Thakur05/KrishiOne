<script>
        // NOTE: This is a frontend-only mockup. A real Neon DB connection would require a secure backend server
        // to handle API calls, authentication, and database queries. Directly connecting from the frontend
        // is insecure and not recommended.

        // In a real application, you would replace this in-memory data with API calls to your backend.
        // Example: await fetch('YOUR_BACKEND_API_URL/products', { method: 'POST', body: JSON.stringify(product) });
        let products = [];
        let messages = [];

        // A mock user ID for demonstration purposes
        const userId = "mock-user-" + Math.random().toString(36).substring(2, 8);

        // All translations for the app
        const translations = {
            en: {
                nav_home: "Home",
                nav_marketplace: "Marketplace",
                nav_tools: "Smart Tools",
                nav_schemes: "Govt Schemes",
                nav_learning: "Learning Hub",
                login_register_btn: "Login/Register",
                hero_title: "Farming Made Smarter with KrishiOne",
                hero_subtitle: "Get real-time advisory, connect with buyers, and discover government schemes, all in one place.",
                explore_marketplace_btn: "Explore Marketplace",
                use_smart_tools_btn: "Use Smart Tools",
                smart_tools_title: "Smart Tools for Modern Farming",
                data_analytics_title: "Data Analytics",
                data_analytics_desc: "Get up-to-the-minute prices for all major commodities.",
                ai_crop_advisor_title: "AI Crop Advisor",
                ai_crop_advisor_desc: "Receive instant advice on crop health and pest control from our AI engine.",
                climate_estimator_title: "Climate Estimator",
                climate_estimator_desc: "Access daily weather forecasts and climate advisories tailored for your region.",
                soil_sense_title: "Soil Sense",
                soil_sense_desc: "Analyze your soil to optimize nutrient levels and improve crop yields.",
                marketplace_title: "Fresh Produce Marketplace",
                search_btn: "Search",
                loading_products: "Loading products...",
                mandi_title: "Mandi Prices & Trends",
                wheat_trend_title: "Wheat",
                wheat_trend_change: "▲ 2.5%",
                wheat_trend_price: "₹2,100 / quintal",
                onions_trend_title: "Onions",
                onions_trend_change: "▼ 5.1%",
                onions_trend_price: "₹1,500 / quintal",
                potatoes_trend_title: "Potatoes",
                potatoes_trend_change: "▲ 0.8%",
                potatoes_trend_price: "₹900 / quintal",
                add_product_btn: "Add Product",
                schemes_title: "Government Schemes & Transparency",
                gov_schemes_subtitle: "Government Schemes for Farmers",
                pm_kisan_title: "PM Kisan Samman Nidhi",
                pm_kisan_desc: "Provides ₹6,000 per year to eligible farmer families in three equal installments.",
                kcc_title: "Kisan Credit Card (KCC)",
                kcc_desc: "Provides timely credit to farmers for their short-term credit requirements.",
                fasal_bima_title: "Fasal Bima Yojana",
                fasal_bima_desc: "Offers insurance coverage and financial support against crop failure.",
                play_audio_btn: "Play Audio",
                transparency_subtitle: "Transparency & Trust",
                verified_title: "Verified Community",
                verified_desc: "All users are verified to ensure safe and reliable trading.",
                secure_transactions_title: "Secure Transactions",
                secure_transactions_desc: "Our payment gateway protects both buyers and sellers.",
                advisory_title: "Audio & Text Advisory",
                advisory_desc: "Get important updates and advice in both text and audio formats.",
                learning_title: "Learning Hub",
                all_btn: "All",
                soil_btn: "Soil",
                water_btn: "Water",
                crops_btn: "Crops",
                new_tech_btn: "New Tech",
                recommended_for_you: "Recommended for you",
                video_title_1: "5 Soil Features No One Talk About",
                video_desc_1: " Discover 5 little-known soil features that hold the key to healthier plants, richer crops, and a thriving ecosystem beneath your feet!",
                video_title_2: "Advanced Drip Irrigation",
                video_desc_2: "Learn how to install an efficient and modern drip irrigation system for better water management.",
                video_title_3: "Soil Health Management",
                video_desc_3: "Simple tips and tricks to improve your soil's health and increase your overall crop yield.",
                community_title: "Community Forum",
                user_id_display: "You are not authenticated. Data will not be shared.",
                no_messages_text: "No messages yet. Start the conversation!",
                send_btn: "Send",
                footer_rights: "© 2026 KrishiOne. All rights reserved.",
                about_link: "About",
                contact_link: "Contact",
                privacy_link: "Privacy",
                add_product_modal_title: "Add a New Product",
                add_product_modal_desc: "Please fill in the details for your product listing.",
                product_name_input_placeholder: "Product Name",
                product_price_input_placeholder: "Price (₹)",
                product_location_input_placeholder: "Location",
                product_contact_input_placeholder: "Phone Number 📱",
                cancel_btn: "Cancel",
                ok_btn: "OK",
                contact_seller_modal_title: "Contact Seller",
                contact_seller_modal_message: (contact) => `Seller contact: ${contact}. Please be careful when sharing personal information online.`,
                invalid_input_modal_title: "Invalid Input",
                invalid_input_modal_message: "Please fill in all fields correctly.",
                product_add_success_modal_title: "Success!",
                product_add_success_modal_message: "Your product has been listed on the marketplace.",
                search_placeholder: "Search for products...",
                message_input_placeholder: "Send a message...",
                welcome_text: "Welcome to AgritradeHub! Your Mock User ID: ",
                product_owner_text: "Posted by:"
            },
            hi: {
                nav_home: "होम",
                nav_marketplace: "मार्केटप्लेस",
                nav_tools: "स्मार्ट टूल्स",
                nav_schemes: "सरकारी योजनाएँ",
                nav_learning: "लर्निंग हब",
                login_register_btn: "लॉगिन/रजिस्टर",
                hero_title: "एग्रीट्रेडहब के साथ खेती को बनाएं स्मार्ट",
                hero_subtitle: "एक ही स्थान पर रियल-टाइम सलाह पाएं, खरीदारों से जुड़ें और सरकारी योजनाओं के बारे में जानें।",
                explore_marketplace_btn: "मार्केटप्लेस देखें",
                use_smart_tools_btn: "स्मार्ट टूल्स का उपयोग करें",
                smart_tools_title: "आधुनिक खेती के लिए स्मार्ट टूल्स",
                data_analytics_title: "डेटा एनालिटिक्स",
                data_analytics_desc: "सभी प्रमुख वस्तुओं के लिए पल-पल की कीमतें प्राप्त करें।",
                ai_crop_advisor_title: "एआई फसल सलाहकार",
                ai_crop_advisor_desc: "हमारे एआई इंजन से फसल स्वास्थ्य और कीट नियंत्रण पर तुरंत सलाह प्राप्त करें।",
                climate_estimator_title: "जलवायु अनुमानक",
                climate_estimator_desc: "अपने क्षेत्र के लिए अनुकूलित दैनिक मौसम पूर्वानुमान और जलवायु सलाह प्राप्त करें।",
                soil_sense_title: "मृदा सेंस",
                soil_sense_desc: "पोषक तत्वों के स्तर को अनुकूलित करने और फसल की पैदावार में सुधार के लिए अपनी मिट्टी का विश्लेषण करें।",
                marketplace_title: "ताजा उपज मार्केटप्लेस",
                search_btn: "खोजें",
                loading_products: "उत्पादों को लोड किया जा रहा है...",
                mandi_title: "मंडी मूल्य और रुझान",
                wheat_trend_title: "गेहूं",
                wheat_trend_change: "▲ 2.5%",
                wheat_trend_price: "₹2,100 / क्विंटल",
                onions_trend_title: "प्याज",
                onions_trend_change: "▼ 5.1%",
                onions_trend_price: "₹1,500 / क्विंटल",
                potatoes_trend_title: "आलू",
                potatoes_trend_change: "▲ 0.8%",
                potatoes_trend_price: "₹900 / क्विंटल",
                add_product_btn: "उत्पाद जोड़ें",
                schemes_title: "सरकारी योजनाएँ और पारदर्शिता",
                gov_schemes_subtitle: "किसानों के लिए सरकारी योजनाएँ",
                pm_kisan_title: "पीएम किसान सम्मान निधि",
                pm_kisan_desc: "पात्र किसान परिवारों को प्रति वर्ष ₹6,000 तीन समान किस्तों में प्रदान करती है।",
                kcc_title: "किसान क्रेडिट कार्ड (KCC)",
                kcc_desc: "किसानों को उनकी अल्पकालिक ऋण आवश्यकताओं के लिए समय पर ऋण प्रदान करता है।",
                fasal_bima_title: "फसल बीमा योजना",
                fasal_bima_desc: "फसल खराब होने के खिलाफ बीमा कवरेज और वित्तीय सहायता प्रदान करती है।",
                play_audio_btn: "ऑडियो चलाएं",
                transparency_subtitle: "पारदर्शिता और विश्वास",
                verified_title: "सत्यापित समुदाय",
                verified_desc: "सुरक्षित और विश्वसनीय व्यापार सुनिश्चित करने के लिए सभी उपयोगकर्ता सत्यापित हैं।",
                secure_transactions_title: "सुरक्षित लेनदेन",
                secure_transactions_desc: "हमारा भुगतान गेटवे खरीदारों और विक्रेताओं दोनों की सुरक्षा करता है।",
                advisory_title: "ऑडियो और टेक्स्ट सलाह",
                advisory_desc: "महत्वपूर्ण अपडेट और सलाह टेक्स्ट और ऑडियो दोनों प्रारूपों में प्राप्त करें।",
                learning_title: "लर्निंग हब",
                all_btn: "सभी",
                soil_btn: "मिट्टी",
                water_btn: "पानी",
                crops_btn: "फसलें",
                new_tech_btn: "नई तकनीक",
                recommended_for_you: "आपके लिए अनुशंसित",
                video_title_1: "खेती में ड्रोन तकनीक",
                video_desc_1: "देखें कि कैसे ड्रोन सटीक छिड़काव और निगरानी के साथ भारतीय कृषि में क्रांति ला रहे हैं।",
                video_title_2: "उन्नत ड्रिप सिंचाई",
                video_desc_2: "बेहतर जल प्रबंधन के लिए एक कुशल और आधुनिक ड्रिप सिंचाई प्रणाली स्थापित करना सीखें।",
                video_title_3: "मृदा स्वास्थ्य प्रबंधन",
                video_desc_3: "अपनी मिट्टी के स्वास्थ्य में सुधार और अपनी कुल फसल की पैदावार बढ़ाने के लिए सरल सुझाव और तरकीबें।",
                community_title: "समुदाय फोरम",
                user_id_display: "आप प्रमाणित नहीं हैं। डेटा साझा नहीं किया जाएगा।",
                no_messages_text: "अभी तक कोई संदेश नहीं। बातचीत शुरू करें!",
                send_btn: "भेजें",
                footer_rights: "© 2025 कृषि वन। सभी अधिकार सुरक्षित।",
                about_link: "के बारे में",
                contact_link: "संपर्क",
                privacy_link: "गोपनीयता",
                add_product_modal_title: "एक नया उत्पाद जोड़ें",
                add_product_modal_desc: "कृपया अपने उत्पाद लिस्टिंग के लिए विवरण भरें।",
                product_name_input_placeholder: "उत्पाद का नाम",
                product_price_input_placeholder: "मूल्य (₹)",
                product_location_input_placeholder: "स्थान",
                product_contact_input_placeholder: "फ़ोन नंबर 📱",
                cancel_btn: "रद्द करें",
                ok_btn: "ठीक है",
                contact_seller_modal_title: "विक्रेता से संपर्क करें",
                contact_seller_modal_message: (contact) => `विक्रेता संपर्क: ${contact}। ऑनलाइन व्यक्तिगत जानकारी साझा करते समय सावधान रहें।`,
                invalid_input_modal_title: "अमान्य इनपुट",
                invalid_input_modal_message: "कृपया सभी फ़ील्ड सही ढंग से भरें।",
                product_add_success_modal_title: "सफलता!",
                product_add_success_modal_message: "आपका उत्पाद मार्केटप्लेस पर सूचीबद्ध हो गया है।",
                search_placeholder: "उत्पादों की खोज करें...",
                message_input_placeholder: "एक संदेश भेजें...",
                welcome_text: "कृषि वन में आपका स्वागत है! आपकी मॉक यूजर आईडी: ",
                product_owner_text: "द्वारा पोस्ट किया गया:"
            },
            pa: {
                nav_home: "ਮੁੱਖ ਪੰਨਾ",
                nav_marketplace: "ਮਾਰਕੀਟਪਲੇਸ",
                nav_tools: "ਸਮਾਰਟ ਟੂਲ",
                nav_schemes: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ",
                nav_learning: "ਸਿੱਖਿਆ ਕੇਂਦਰ",
                login_register_btn: "ਲਾਗਇਨ/ਰਜਿਸਟਰ",
                hero_title: "ਐਗਰੀਟ੍ਰੇਡਹਬ ਨਾਲ ਖੇਤੀ ਨੂੰ ਸਮਾਰਟ ਬਣਾਓ",
                hero_subtitle: "ਇੱਕ ਹੀ ਥਾਂ 'ਤੇ ਰੀਅਲ-ਟਾਈਮ ਸਲਾਹ, ਖਰੀਦਦਾਰਾਂ ਨਾਲ ਸੰਪਰਕ ਅਤੇ ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਬਾਰੇ ਜਾਣੋ।",
                explore_marketplace_btn: "ਮਾਰਕੀਟਪਲੇਸ ਵੇਖੋ",
                use_smart_tools_btn: "ਸਮਾਰਟ ਟੂਲ ਵਰਤੋ",
                smart_tools_title: "ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਸਮਾਰਟ ਟੂਲ",
                data_analytics_title: "ਡਾਟਾ ਐਨਾਲਿਟਿਕਸ",
                data_analytics_desc: "ਸਾਰੀਆਂ ਪ੍ਰਮੁੱਖ ਵਸਤਾਂ ਲਈ ਹਰ ਮਿੰਟ ਦੀਆਂ ਕੀਮਤਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।",
                ai_crop_advisor_title: "ਏਆਈ ਫਸਲ ਸਲਾਹਕਾਰ",
                ai_crop_advisor_desc: "ਸਾਡੇ ਏਆਈ ਇੰਜਣ ਤੋਂ ਫਸਲ ਦੀ ਸਿਹਤ ਅਤੇ ਕੀਟ ਨਿਯੰਤਰਣ ਬਾਰੇ ਤੁਰੰਤ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ।",
                climate_estimator_title: "ਜਲਵਾਯੂ ਅੰਦਾਜ਼ਾਕਾਰ",
                climate_estimator_desc: "ਆਪਣੇ ਖੇਤਰ ਲਈ ਵਿਸ਼ੇਸ਼ ਤੌਰ 'ਤੇ ਤਿਆਰ ਕੀਤੇ ਗਏ ਰੋਜ਼ਾਨਾ ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਜਲਵਾਯੂ ਸਲਾਹ ਤੱਕ ਪਹੁੰਚ ਕਰੋ।",
                soil_sense_title: "ਮਿੱਟੀ ਸੈਂਸ",
                soil_sense_desc: "ਪੌਸ਼ਟਿਕ ਤੱਤਾਂ ਦੇ ਪੱਧਰਾਂ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਅਤੇ ਫਸਲ ਦੀ ਪੈਦਾਵਾਰ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਆਪਣੀ ਮਿੱਟੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ।",
                marketplace_title: "ਤਾਜ਼ੇ ਉਤਪਾਦਾਂ ਦਾ ਮਾਰਕੀਟਪਲੇਸ",
                search_btn: "ਖੋਜੋ",
                loading_products: "ਉਤਪਾਦ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
                mandi_title: "ਮੰਡੀ ਦੀਆਂ ਕੀਮਤਾਂ ਅਤੇ ਰੁਝਾਨ",
                wheat_trend_title: "ਕਣਕ",
                wheat_trend_change: "▲ 2.5%",
                wheat_trend_price: "₹2,100 / ਕੁਇੰਟਲ",
                onions_trend_title: "ਪਿਆਜ਼",
                onions_trend_change: "▼ 5.1%",
                onions_trend_price: "₹1,500 / ਕੁਇੰਟਲ",
                potatoes_trend_title: "ਆਲੂ",
                potatoes_trend_change: "▲ 0.8%",
                potatoes_trend_price: "₹900 / ਕੁਇੰਟਲ",
                add_product_btn: "ਉਤਪਾਦ ਸ਼ਾਮਲ ਕਰੋ",
                schemes_title: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਅਤੇ ਪਾਰਦਰਸ਼ਤਾ",
                gov_schemes_subtitle: "ਕਿਸਾਨਾਂ ਲਈ ਸਰਕਾਰੀ ਸਕੀਮਾਂ",
                pm_kisan_title: "ਪੀਐਮ ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧੀ",
                pm_kisan_desc: "ਯੋਗ ਕਿਸਾਨ ਪਰਿਵਾਰਾਂ ਨੂੰ ਪ੍ਰਤੀ ਸਾਲ ₹6,000 ਤਿੰਨ ਬਰਾਬਰ ਕਿਸ਼ਤਾਂ ਵਿੱਚ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।",
                kcc_title: "ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ (KCC)",
                kcc_desc: "ਕਿਸਾਨਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀਆਂ ਛੋਟੀਆਂ ਮਿਆਦ ਦੀਆਂ ਕਰਜ਼ੇ ਦੀਆਂ ਲੋੜਾਂ ਲਈ ਸਮੇਂ ਸਿਰ ਕਰਜ਼ਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
                fasal_bima_title: "ਫਸਲ ਬੀਮਾ ਯੋਜਨਾ",
                fasal_bima_desc: "ਫਸਲ ਦੇ ਖਰਾਬ ਹੋਣ ਦੇ ਖਿਲਾਫ ਬੀਮਾ ਕਵਰੇਜ ਅਤੇ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।",
                play_audio_btn: "ਆਡੀਓ ਚਲਾਓ",
                transparency_subtitle: "ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਵਿਸ਼ਵਾਸ",
                verified_title: "ਪ੍ਰਮਾਣਿਤ ਭਾਈਚਾਰਾ",
                verified_desc: "ਸੁਰੱਖਿਅਤ ਅਤੇ ਭਰੋਸੇਮੰਦ ਵਪਾਰ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਸਾਰੇ ਉਪਭੋਗਤਾ ਪ੍ਰਮਾਣਿਤ ਹਨ।",
                secure_transactions_title: "ਸੁਰੱਖਿਅਤ ਲੈਣ-ਦੇਣ",
                secure_transactions_desc: "ਸਾਡਾ ਭੁਗਤਾਨ ਗੇਟਵੇ ਖਰੀਦਦਾਰਾਂ ਅਤੇ ਵਿਕਰੇਤਾਵਾਂ ਦੋਵਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।",
                advisory_title: "ਆਡੀਓ ਅਤੇ ਟੈਕਸਟ ਸਲਾਹ",
                advisory_desc: "ਮਹੱਤਵਪੂਰਨ ਅਪਡੇਟਾਂ ਅਤੇ ਸਲਾਹ ਟੈਕਸਟ ਅਤੇ ਆਡੀਓ ਦੋਵਾਂ ਫਾਰਮੈਟਾਂ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕਰੋ।",
                learning_title: "ਸਿੱਖਿਆ ਕੇਂਦਰ",
                all_btn: "ਸਾਰੇ",
                soil_btn: "ਮਿੱਟੀ",
                water_btn: "ਪਾਣੀ",
                crops_btn: "ਫਸਲਾਂ",
                new_tech_btn: "ਨਵੀਂ ਤਕਨੀਕ",
                recommended_for_you: "ਤੁਹਾਡੇ ਲਈ ਸਿਫਾਰਸ਼ੀ",
                video_title_1: "ਖੇਤੀ ਵਿੱਚ ਡਰੋਨ ਤਕਨਾਲੋਜੀ",
                video_desc_1: "ਵੇਖੋ ਕਿ ਕਿਵੇਂ ਡਰੋਨ ਸਹੀ ਛਿੜਕਾਅ ਅਤੇ ਨਿਗਰਾਨੀ ਨਾਲ ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਕ੍ਰਾਂਤੀ ਲਿਆ ਰਹੇ ਹਨ।",
                video_title_2: "ਐਡਵਾਂਸਡ ਡ੍ਰਿਪ ਸਿੰਚਾਈ",
                video_desc_2: "ਬਿਹਤਰ ਜਲ ਪ੍ਰਬੰਧਨ ਲਈ ਇੱਕ ਕੁਸ਼ਲ ਅਤੇ ਆਧੁਨਿਕ ਡ੍ਰਿਪ ਸਿੰਚਾਈ ਪ੍ਰਣਾਲੀ ਕਿਵੇਂ ਸਥਾਪਿਤ ਕਰਨੀ ਹੈ ਬਾਰੇ ਸਿੱਖੋ।",
                video_title_3: "ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਪ੍ਰਬੰਧਨ",
                video_desc_3: "ਆਪਣੀ ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਅਤੇ ਆਪਣੀ ਸਮੁੱਚੀ ਫਸਲ ਦੀ ਪੈਦਾਵਾਰ ਵਧਾਉਣ ਲਈ ਸਧਾਰਨ ਸੁਝਾਅ ਅਤੇ ਤਰੀਕੇ।",
                community_title: "ਭਾਈਚਾਰਕ ਫੋਰਮ",
                user_id_display: "ਤੁਸੀਂ ਪ੍ਰਮਾਣਿਤ ਨਹੀਂ ਹੋ। ਡਾਟਾ ਸਾਂਝਾ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ।",
                no_messages_text: "ਹਾਲੇ ਕੋਈ ਸੁਨੇਹਾ ਨਹੀਂ। ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰੋ!",
                send_btn: "ਭੇਜੋ",
                footer_rights: "© 2026 ਕ੍ਰਿਸੀ ਵਨ। ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
                about_link: "ਬਾਰੇ",
                contact_link: "ਸੰਪਰਕ",
                privacy_link: "ਗੋਪਨੀਅਤਾ",
                add_product_modal_title: "ਇੱਕ ਨਵਾਂ ਉਤਪਾਦ ਜੋੜੋ",
                add_product_modal_desc: "ਕిరపా కరకే మీ ఉత్పత్తి జాబితా కొరకు వర్న పూరించండి।",
                product_name_input_placeholder: "ਉਤਪਾਦ ਦਾ ਨਾਮ",
                product_price_input_placeholder: "ਕੀਮਤ (₹)",
                product_location_input_placeholder: "ਸਥਾਨ",
                product_contact_input_placeholder: "ਫੋਨ ਨੰਬਰ 📱",
                cancel_btn: "ਰੱਦ ਕਰੋ",
                ok_btn: "ਠੀਕ ਹੈ",
                contact_seller_modal_title: "ਵਿਕਰੇਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
                contact_seller_modal_message: (contact) => `ਵਿਕਰੇਤਾ ਸੰਪਰਕ: ${contact}। ਆਨਲਾਈਨ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਕਰਦੇ ਸਮੇਂ ਸਾਵਧਾਨ ਰਹੋ।`,
                invalid_input_modal_title: "ਅਵੈਧ ਇਨਪੁੱਟ",
                invalid_input_modal_message: "ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਖੇਤਰਾਂ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਭਰੋ।",
                product_add_success_modal_title: "ਸਫਲਤਾ!",
                product_add_success_modal_message: "ਤੁਹਾਡਾ ਉਤਪਾਦ ਮਾਰਕੀਟਪਲੇਸ 'ਤੇ ਸੂਚੀਬੱਧ ਹੋ ਗਿਆ ਹੈ।",
                search_placeholder: "ਉਤਪਾਦਾਂ ਦੀ ਖੋਜ ਕਰੋ...",
                message_input_placeholder: "ਇੱਕ ਸੁਨੇਹਾ ਭੇਜੋ...",
                welcome_text: "ਕ੍ਰਿਸੀ ਵਨ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ! ਤੁਹਾਡੀ ਮੌਕ ਯੂਜ਼ਰ ਆਈਡੀ: ",
                product_owner_text: "ਦੁਆਰਾ ਪੋਸਟ ਕੀਤਾ ਗਿਆ:"
                hero_subtitle: "একই জায়গায় রিয়েল-টাইম পরামর্শ পান, ক্রেতাদের সাথে সংযোগ করুন এবং সরকারি স্কিমগুলি আবিষ্কার করুন।",
                explore_marketplace_btn: "মার্কেটপ্লেস অন্বেষণ করুন",
                use_smart_tools_btn: "স্মার্ট টুল ব্যবহার করুন",
                smart_tools_title: "আধুনিক কৃষির জন্য স্মার্ট টুলস",
                data_analytics_title: "ডেটা অ্যানালিটিক্স",
                data_analytics_desc: "সমস্ত প্রধান পণ্যের জন্য আপ-টু-দ্যা-মিনিট মূল্য পান।",
                ai_crop_advisor_title: "এআই শস্য উপদেষ্টা",
                ai_crop_advisor_desc: "আমাদের এআই ইঞ্জিন থেকে শস্যের স্বাস্থ্য এবং কীটপতঙ্গ নিয়ন্ত্রণ সম্পর্কে তাৎক্ষণিক পরামর্শ পান।",
                climate_estimator_title: "জলবায়ু আনুমানিক",
                climate_estimator_desc: "আপনার অঞ্চলের জন্য তৈরি করা দৈনিক আবহাওয়ার পূর্বাভাস এবং জলবায়ু পরামর্শ অ্যাক্সেস করুন।",
                soil_sense_title: "মাটি সেন্স",
                soil_sense_desc: "পুষ্টির মাত্রা অপ্টিমাইজ করতে এবং ফসলের ফলন উন্নত করতে আপনার মাটির বিশ্লেষণ করুন।",
                marketplace_title: "তাজা পণ্যের মার্কেটপ্লেস",
                search_btn: "অনুসন্ধান",
                loading_products: "পণ্য লোড হচ্ছে...",
                mandi_title: "মান্ডির দাম এবং প্রবণতা",
                wheat_trend_title: "গম",
                wheat_trend_change: "▲ 2.5%",
                wheat_trend_price: "₹2,100 / কুইন্টাল",
                onions_trend_title: "পেঁয়াজ",
                onions_trend_change: "▼ 5.1%",
                onions_trend_price: "₹1,500 / কুইন্টাল",
                potatoes_trend_title: "আলু",
                potatoes_trend_change: "▲ 0.8%",
                potatoes_trend_price: "₹900 / কুইন্টাল",
                add_product_btn: "পণ্য যোগ করুন",
                schemes_title: "সরকারি প্রকল্প এবং স্বচ্ছতা",
                gov_schemes_subtitle: "কৃষকদের জন্য সরকারি প্রকল্প",
                pm_kisan_title: "পিএম কিষান সম্মান নিধি",
                pm_kisan_desc: "যোগ্য কৃষক পরিবারকে প্রতি বছর ₹6,000 তিনটি সমান কিস্তিতে প্রদান করে।",
                kcc_title: "কিষান ক্রেডিট কার্ড (KCC)",
                kcc_desc: "কৃষকদের তাদের স্বল্পমেয়াদী ঋণের প্রয়োজনের জন্য সময়মতো ঋণ প্রদান করে।",
                fasal_bima_title: "ফসল বীমা যোজনা",
                fasal_bima_desc: "ফসলের ক্ষতির বিরুদ্ধে বীমা কভারেজ এবং আর্থিক সহায়তা প্রদান করে।",
                play_audio_btn: "অডিও চালান",
                transparency_subtitle: "স্বচ্ছতা এবং বিশ্বাস",
                verified_title: "যাচাইকৃত সম্প্রদায়",
                verified_desc: "নিরাপদ এবং নির্ভরযোগ্য ট্রেডিং নিশ্চিত করতে সমস্ত ব্যবহারকারী যাচাই করা হয়।",
                secure_transactions_title: "নিরাপদ লেনদেন",
                secure_transactions_desc: "আমাদের পেমেন্ট গেটওয়ে ক্রেতা এবং বিক্রেতা উভয়কেই রক্ষা করে।",
                advisory_title: "অডিও এবং টেক্সট পরামর্শ",
                advisory_desc: "গুরুত্বপূর্ণ আপডেট এবং পরামর্শ টেক্সট এবং অডিও উভয় ফর্ম্যাটে পান।",
                learning_title: "লার্নিং হাব",
                all_btn: "সব",
                soil_btn: "মাটি",
                water_btn: "পানি",
                crops_btn: "শস্য",
                new_tech_btn: "নতুন প্রযুক্তি",
                recommended_for_you: "আপনার জন্য প্রস্তাবিত",
                video_title_1: "কৃষিতে ড্রোন প্রযুক্তি",
                video_desc_1: "দেখুন কিভাবে ড্রোনগুলি সুনির্দিষ্ট স্প্রে এবং পর্যবেক্ষণের মাধ্যমে ভারতীয় কৃষিতে বিপ্লব ঘটাচ্ছে।",
                video_title_2: "উন্নত ড্রিপ সেচ",
                video_desc_2: "উন্নত জল ব্যবস্থাপনার জন্য একটি দক্ষ এবং আধুনিক ড্রিপ সেচ ব্যবস্থা কীভাবে স্থাপন করতে হয় তা শিখুন।",
                video_title_3: "মাটির স্বাস্থ্য ব্যবস্থাপনা",
                video_desc_3: "আপনার মাটির স্বাস্থ্য উন্নত করতে এবং আপনার সামগ্রিক ফসলের ফলন বাড়াতে সহজ টিপস এবং কৌশল।",
                community_title: "সম্প্রদায় ফোরাম",
                user_id_display: "আপনি প্রমাণীকরণ করেননি। ডেটা শেয়ার করা হবে না।",
                no_messages_text: "এখন পর্যন্ত কোন বার্তা নেই। কথোপকথন শুরু করুন!",
                send_btn: "পাঠান",
                footer_rights: "© 2026 কৃষি বন। সমস্ত অধিকার সংরক্ষিত।",
                about_link: "সম্পর্কে",
                contact_link: "যোগাযোগ",
                privacy_link: "গোপনীয়তা",
                add_product_modal_title: "একটি নতুন পণ্য যোগ করুন",
                add_product_modal_desc: "আপনার পণ্য তালিকার জন্য বিস্তারিত পূরণ করুন।",
                product_name_input_placeholder: "পণ্যের নাম",
                product_price_input_placeholder: "মূল্য (₹)",
                product_location_input_placeholder: "অবস্থান",
                product_contact_input_placeholder: "ফোন নম্বর 📱",
                cancel_btn: "বাতিল",
                ok_btn: "ঠিক আছে",
                contact_seller_modal_title: "বিক্রেতার সাথে যোগাযোগ করুন",
                contact_seller_modal_message: (contact) => `বিক্রেতার যোগাযোগ: ${contact}। অনলাইনে ব্যক্তিগত তথ্য শেয়ার করার সময় সতর্ক থাকুন।`,
                invalid_input_modal_title: "অবৈধ ইনপুট",
                invalid_input_modal_message: "দয়া করে সমস্ত ক্ষেত্র সঠিকভাবে পূরণ করুন।",
                product_add_success_modal_title: "সফল!",
                product_add_success_modal_message: "আপনার পণ্য মার্কেটপ্লেসে তালিকাভুক্ত করা হয়েছে।",
                search_placeholder: "পণ্য অনুসন্ধান করুন...",
                message_input_placeholder: "একটি বার্তা পাঠান...",
                welcome_text: "কৃষি বনে স্বাগতম! আপনার মক ইউজার আইডি: ",
                product_owner_text: "দ্বারা পোস্ট করা হয়েছে:"
            }
        };

        window.onload = () => {
            // Update the UI with the mock user ID
            document.getElementById('userIdDisplay').textContent = translations.en.user_id_display;
            
            // Set initial language to English
            setLanguage('en');

            // Initial render of the in-memory data
            renderProducts(products);
            renderMessages(messages);
        };

        // Function to set the language of the entire page
        const setLanguage = (lang) => {
            const elements = document.querySelectorAll('[data-key]');
            elements.forEach(el => {
                const key = el.getAttribute('data-key');
                const translation = translations[lang][key];
                if (translation) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = translation;
                    } else if (typeof translation === 'function') {
                        // Handle dynamic text like modal messages
                        // You'll need to update the logic for these dynamically
                    } else {
                        el.textContent = translation;
                    }
                }
            });

            // Handle the dynamic placeholders separately
            document.getElementById('productSearch').placeholder = translations[lang].search_placeholder;
            document.getElementById('messageInput').placeholder = translations[lang].message_input_placeholder;
            document.getElementById('productNameInput').placeholder = translations[lang].product_name_input_placeholder;
            document.getElementById('productPriceInput').placeholder = translations[lang].product_price_input_placeholder;
            document.getElementById('productLocationInput').placeholder = translations[lang].product_location_input_placeholder;
            document.getElementById('productContactInput').placeholder = translations[lang].product_contact_input_placeholder;

            // Handle modal messages
            document.getElementById('infoModalTitle').textContent = translations[lang].invalid_input_modal_title;
            document.getElementById('infoModalMessage').textContent = translations[lang].invalid_input_modal_message;
            
            // Set the html lang attribute
            document.documentElement.lang = lang;
        };

        const productGrid = document.getElementById('productGrid');
        const messagesContainer = document.getElementById('messagesContainer');
        const addProductBtn = document.getElementById('addProductBtn');
        const addProductModal = document.getElementById('addProductModal');
        const cancelModalBtn = document.getElementById('cancelModalBtn');
        const submitModalBtn = document.getElementById('submitModalBtn');
        const productNameInput = document.getElementById('productNameInput');
        const productPriceInput = document.getElementById('productPriceInput');
        const productLocationInput = document.getElementById('productLocationInput');
        const productContactInput = document.getElementById('productContactInput');
        const messageInput = document.getElementById('messageInput');
        const sendMessageBtn = document.getElementById('sendMessageBtn');
        const infoModal = document.getElementById('infoModal');
        const infoModalTitle = document.getElementById('infoModalTitle');
        const infoModalMessage = document.getElementById('infoModalMessage');
        const infoModalCloseBtn = document.getElementById('infoModalCloseBtn');

        // --- Core Functions ---
        const showInfoModal = (titleKey, messageKey, contact = '') => {
            infoModalTitle.textContent = translations[document.documentElement.lang][titleKey];
            const messageFunc = translations[document.documentElement.lang][messageKey];
            infoModalMessage.textContent = typeof messageFunc === 'function' ? messageFunc(contact) : messageFunc;
            infoModal.style.display = 'flex';
        };

        infoModalCloseBtn.addEventListener('click', () => {
            infoModal.style.display = 'none';
        });

        // --- Marketplace Functions ---
        const renderProducts = (productList) => {
            productGrid.innerHTML = '';
            if (productList.length === 0) {
                productGrid.innerHTML = `<p class="col-span-full text-center text-gray-500">${translations[document.documentElement.lang].no_products_text}</p>`;
            }
            productList.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'card p-6 flex flex-col items-center text-center';
                const ownerText = translations[document.documentElement.lang].product_owner_text;
                productCard.innerHTML = `
                    <img src="https://placehold.co/250x250/f0fdf4/38a169?text=${encodeURIComponent(product.name)}" alt="${product.name}" class="rounded-xl w-full h-auto mb-4">
                    <h3 class="font-bold text-2xl text-gray-800">${product.name}</h3>
                    <p class="text-green-600 font-extrabold text-3xl mt-2 mb-2">₹ ${product.price}</p>
                    <div class="flex items-center text-sm text-gray-500 mb-4">
                        <i class="ri-map-pin-line mr-1"></i>
                        <span>${product.location}</span>
                    </div>
                    <p class="text-sm text-gray-500 mb-4">${ownerText} <span class="truncate">${product.ownerId}</span></p>
                    <button class="w-full btn-secondary py-3 text-lg" onclick="showInfoModal('contact_seller_modal_title', 'contact_seller_modal_message', '${product.contact}')">${translations[document.documentElement.lang].contact_seller_btn}</button>
                `;
                productGrid.appendChild(productCard);
            });
        };

        // --- Community Forum Functions ---
        const renderMessages = (messageList) => {
            messagesContainer.innerHTML = '';
            if (messageList.length === 0) {
                messagesContainer.innerHTML = `<p class="text-center text-gray-500">${translations[document.documentElement.lang].no_messages_text}</p>`;
            }
            messageList.forEach(msg => {
                const messageElement = document.createElement('div');
                messageElement.className = 'flex items-start space-x-2 p-2 rounded-lg bg-white shadow-sm';
                messageElement.innerHTML = `
                    <div class="flex-shrink-0">
                        <i class="ri-user-line text-xl text-gray-400"></i>
                    </div>
                    <div class="flex-grow">
                        <p class="font-semibold text-sm truncate">${msg.userId}</p>
                        <p class="text-gray-700">${msg.text}</p>
                    </div>
                `;
                messagesContainer.appendChild(messageElement);
            });
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        };

        // --- Event Listeners and Setup ---
        addProductBtn.addEventListener('click', () => {
            addProductModal.style.display = 'flex';
        });

        cancelModalBtn.addEventListener('click', () => {
            addProductModal.style.display = 'none';
        });

        submitModalBtn.addEventListener('click', () => {
            const productName = productNameInput.value.trim();
            const productPrice = parseFloat(productPriceInput.value);
            const productLocation = productLocationInput.value.trim();
            const productContact = productContactInput.value.trim();

            if (productName && !isNaN(productPrice) && productLocation && productContact) {
                const newProduct = {
                    name: productName,
                    price: productPrice,
                    location: productLocation,
                    contact: productContact,
                    ownerId: userId
                };
                products.push(newProduct);
                renderProducts(products); // Update the UI
                showInfoModal("product_add_success_modal_title", "product_add_success_modal_message");

                // Reset modal inputs
                addProductModal.style.display = 'none';
                productNameInput.value = '';
                productPriceInput.value = '';
                productLocationInput.value = '';
                productContactInput.value = '';

                // NOTE: Here is where you would make an API call to your backend to save the data to Neon DB.
                // Example:
                // fetch('YOUR_BACKEND_API_URL/products', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(newProduct)
                // }).then(response => response.json()).then(data => console.log('Product added to DB:', data));

            } else {
                showInfoModal("invalid_input_modal_title", "invalid_input_modal_message");
            }
        });

        const sendMessage = () => {
            const messageText = messageInput.value.trim();
            if (messageText) {
                const newMessage = {
                    userId: userId,
                    text: messageText,
                    timestamp: new Date().toISOString()
                };
                messages.push(newMessage);
                renderMessages(messages); // Update the UI
                messageInput.value = '';

                // NOTE: Here is where you would make an API call to your backend to save the message to Neon DB.
                // Example:
                // fetch('YOUR_BACKEND_API_URL/messages', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(newMessage)
                // }).then(response => response.json()).then(data => console.log('Message sent:', data));
            }
        };

        sendMessageBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Other UI and mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });
        closeMobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });

        window.playAudio = (text) => {
            const audio = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(audio);
        };
        
        // Add event listeners for language selection
        document.querySelectorAll('.lang-select').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.target.getAttribute('data-lang');
                setLanguage(lang);
                // Re-render dynamic content with the new language
                renderProducts(products);
                renderMessages(messages);
            });
        });

    </script>