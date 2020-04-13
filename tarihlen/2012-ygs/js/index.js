(function($) {
    var colors = ["#583119"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: "Diyarbakır yakınlarında bulunan Çayönü yerleşim yerine ait aşağıdaki bilgilerden hangisinin, erken dönemlerde bile malzemelerin yer değiştirdiğine ve olası bir ticaretin varlığına kanıt olduğu savunulabilir?",
        choices: {
            correct: "Kolye yapımında çeşitli renklerde taş boncuklarla deniz kabuklarının kullanılması",
            wrong: ["MÖ 7000 yılına tarihlenen en eski dokuma parçasının bulunması", "Girişleri çatıda olan tahıl ambarlarının bulunması", "Tarımsal etkinliklerde değirmen taşları ve orakların kullanılması", "Av etkinliklerinde evcilleştirilmiş köpeklerin kullanılması"]
        }
    }, {
        question_string: "Orhun Yazıtları’ndaki Türkçede yabancı dil ögelerinin oranı çok azken Uygurlar Dönemi metinlerinde bu oranın arttığı görülmüştür.\nBu durumda aşağıdakilerden hangisinin etkili olduğu söylenemez?",
        choices: {
            correct: "Türkçe kurallar çerçevesinde sözcükler türetilmesinin",
            wrong: ["Uygur ülkesinde ticaretin artmasının", "Yabancı dillerin Uygur Türkçesine çevrilmesiyle yeni terimlerin girmesinin", "Farklı dinlerin benimsenmesinin", "Kültürel ilişkilerin artmasının"]
        }
    }, {
        question_string: "İslam Devleti’nde Hz. Muhammet’ten sonra devlet başkanı olan kişiye halife sanı verilmiştir. Ancak Dört Halife Dönemi’nin ardından halifenin dinî ve siyasi otoritesi, İslam dünyasının tümünde kabul görmemiştir. Buna, İslam tarihinde görülen,\nI. Emevi halifelerinin güttüğü Arap milliyetçiliği siyasetine karşı tepkilerin ortaya çıkması,\nII. Abbasiler, Fatımiler ve Endülüs Emevilerinde olmak üzere aynı anda üç halifenin olması,\nIII. Dört Halife Dönemi’nde Kur’an-ı Kerim’in kitap hâline getirilmesi ve çoğaltılması\ndurumlarından hangilerinin kanıt olduğu savunulabilir?",
        choices: {
            correct: "I ve II",
            wrong: ["II ve III", "Yalnız I", "Yalnız II", "Yalnız III"]
        }
    }, {
        question_string: "İslamiyet’i kabul eden ilk Türk devletlerinden biri olan Karahanlılarda; hükümdarlık halife tarafından tasdik edilmiş, ülkede halife adına hutbe okutulup para bastırılmıştır. Böyle olmakla birlikte İslamiyet öncesi yönetim gelenekleri de büyük ölçüde devam ettirilmiştir. Buna göre, Karahanlılar,\nI. İslamiyet’i kendi kültürleriyle kaynaştıran bir siyasi yapı oluşturmuşlardır.\nII. Din ve devlet işlerini birbirinden ayırmışlardır.\nIII. Arap kültürünü bütünüyle benimsemişlerdir.\nyargılarından hangilerinin doğru olduğu savunulabilir?",
        choices: {
            correct: "Yalnız I",
            wrong: ["Yalnız II", "Yalnız III", "I ve II", "I, II ve III"]
        }
    }, {
        question_string: "Fatih Sultan Mehmet; Fener Ortodoks Kilisesinin varlığını sürdürmesine izin verirken, Yahudi ve Ermeni cemaatlerinin örgütlenmelerine olanak sağlamıştır. Bosna Fransisken Kilisesine verdiği 1463 tarihli fermanda da onlara kendi dillerinde ibadet ve eğitim özgürlüğü tanımıştır.\nBu durumun, aşağıdakilerden hangisinin bir göstergesi olduğu savunulabilir?",
        choices: {
            correct: "Müslüman olmayanlara kendi benliklerini koruma olanağı sağlandığının",
            wrong: ["Müslüman olmayanların Müslümanlarla eşit haklara sahip olduğunun", "Ticaretin, Müslüman olmayanların elinde olduğunun", "Müslüman olmayanların devlet yönetimine katıldığının", "Osmanlı veraset sisteminin değiştiğinin"]
        }
    }, {
        question_string: "Saray içinde bir sanatçı örgütlenmesi olan Ehli Hiref’te yer alan nakkaşlar tarafından üretilen desenler, İmparatorluk sınırları içinde bulunan çeşitli merkezlerdeki sanatçılar tarafından da örnek alınırdı.\nBu uygulamanın, Osmanlı sanatında aşağıdakilerden hangisinde etkili olduğu savunulabilir?", choices: {
            correct: "Üslup birliğinin sağlanması ve korunmasında",
            wrong: ["Minyatüre yalnız tarihî konulu yazmalarda rastlanılmasında", "Hat sanatının ortaya çıkmasında", "İç mimaride kalem işi süslemeleriyle yetinilmesinde", "Bezeme örneklerinin minyatürle sınırlı kalmasında"]
        }
    }, {
        question_string: "Batı’da başlayan kadın-erkek eşitliği tartışmaları Osmanlı toplumunu da etkilemiş, kadın hakları tartışılarak kadınlarla ilgili birçok yayın ortaya çıkmıştır.\nBu durumun, Osmanlı toplumunda aşağıdakilerden hangisi üzerinde hızlandırıcı etkisi olduğu savunulabilir?",
        choices: {
            correct: "Kadının sosyal hayata katılımının giderek artmasında",
            wrong: ["Osmanlı kırsal kesiminde kadınların tarım işlerinde çalışmasında", "Kadının çocuk bakımında ailenin en etkin kişisi olmasında", "Kadınların harem koşulları içinde eğitimlerini sürdürebilmesinde", "Kasaba ve köylerde geleneksel aile yapısının devam etmesinde"]
        }
    }, {
        question_string: "7 Ekim 1912’de Avusturya ve Rusya; Balkanlarda bir savaş çıkarsa zayıf gördükleri Balkan Devletlerini korumak için savaş sonunda mevcut sınırların değişmemesi gerektiğini ilan etmiş, İngiltere ve Fransa da bu fikri desteklemiştir. Ancak İngiltere ve Fransa, Birinci Balkan Savaşı sonuçlarına ses çıkarmazken İkinci Balkan Savaşı’nda Osmanlı Devleti’nin Edirne’yi geri almasını protesto etmiştir.\nBu gelişmelerin, aşağıdakilerden hangisinin bir göstergesi olduğu savunulamaz?",
        choices: {
            correct: "İngiltere ve Rusya’nın ortak bir Balkan politikası olduğunun",
            wrong: ["İngiltere ve Fransa’nın, Osmanlı Devleti’nin genişlemesinden rahatsız olduklarının", "Avusturya ve Rusya’nın, Osmanlı Devleti’nin Balkan Savaşlarında başarılı olabileceğini düşündüklerinin", "Ülkelerin kendi menfaatleri doğrultusunda politika oluşturduğunun", "Osmanlıların İkinci Balkan Savaşı’nda, yitirdikleri toprakların bir kısmını geri aldığının"]
        }
    }, {
        question_string: "30 Aralık 1919’da İtalyan Epoka Gazetesi’nin, Mebuslar Meclisi açılır açılmaz Kuvayımilliye’nin dağılıp dağılmayacağı sorusuna Mustafa Kemal “Milletin bu konudaki istekleri Sivas Kongresi’nin resmî bildirgesinde açıkça belirtilmiştir. Teşkilat, bu istek gerçekleşene kadar görevini yerine getirecektir.” demiştir.\nMustafa Kemal'in, bu sözüyle aşağıdakilerden hangisini vurguladığı savunulabilir?",
        choices: {
            correct: "Vatanın bölünmez bütünlüğüne yönelik tehlikenin bütünüyle yok edilmesinin hedeflendiğini",
            wrong: ["Mebuslar Meclisinin barışı sağlayacağına inanıldığını", "Millî cemiyetlerin birleştirilmesinin gerektiğini", "Düzenli ordu kurulmasının gerekliliğini", "İstanbul Hükûmetinin desteğinin amaçlandığını"]
        }
    }, {
        question_string: "Kurtuluş Savaşı’nın, zamanla Batı Cephesi’nde bir Türk-Yunan Savaşı’na dönüşmesinde aşağıdakilerden hangisinin etkili olduğu savunulabilir?",
        choices: {
            correct: "Diğer cephelerin kapatılmasıyla tüm kuvvetlerin Batı’da toplanmasının",
            wrong: ["Rusya’nın Osmanlı Devleti’ne yönelik gizli paylaşım anlaşmalarını açıklamasının", "Yunanistan’la Birinci Dünya Savaşı’nda fiilen mücadele edilmemesinin", "İşgal bölgelerinde azınlıkların yeni devlet kurmak istemesinin", "Batı bölgesinde bazı Kuvayımilliye yanlılarının TBMM’ye karşı ayaklanmasının"]
        }
    }, {
        question_string: "Temmuz 1921’de düzenlenmesi planlanan Eğitim Kongresi’nin, Eskişehir-Kütahya Savaşlarının şiddetlenmesi nedeniyle ertelenmesi önerisi üzerine Mustafa Kemal “Hayır ertelemeyin… Cahillikle, ilkellikle savaş, düşmanla savaştan daha az önemli değildir.” demiştir.\nMustafa Kemal'in savaş ortamında söylediği bu sözün, aşağıdakilerden hangisine bir kanıt olduğu savunulabilir?",
        choices: {
            correct: "Mustafa Kemal’in eğitim ve öğretime verdiği önemin büyüklüğüne",
            wrong: ["Mustafa Kemal’in bir komutan olarak başarısına", "Uluslararası ilişkilerde barışın ilke edinildiğine", "Ülkedeki etkinliklerin tamamen savaşların durumuna göre belirlendiğine", "Ülke savunmasında ekonomik koşulların önemine"]
        }
    }, {
        question_string: "Millî Mücadele Dönemi’nde bir İngiliz tarihçinin “Yenilmiş, parçalanmış bir ulusun, bu harabe içinden ayağa kalkması ve dünyanın en büyük ulusları ile tam eşit şartlar içinde karşı karşıya gelmesi ve Büyük Savaş’ın bu galiplerini dize getirerek her istediğini kabul ettirmesi şaşılacak şeydir.” diyerek tanımladığı antlaşma aşağıdakilerden hangisidir?",
        choices: {
            correct: "Lozan",
            wrong: ["Moskova", "Gümrü", "Ankara", "Kars"]
        }
    }, {
        question_string: "Misakımillî sınırları içinde TBMM Hükûmetinden başka bir hükûmet olamayacağının aşağıdakilerden hangisine temel gerekçe olduğu söylenebilir?",
        choices: {
            correct: "Saltanatın kaldırılmasına",
            wrong: ["Halifeliğin kaldırılmasına", "Şeriye ve Evkaf Vekâletinin kaldırılmasına", "Hıyânet-i Vataniye Kanunu’nun çıkarılmasına", "Tevhid-i Tedrisat Kanunu’nun çıkarılmasına"]
        }
    }, {
        question_string: "Mustafa Kemal “Millî bilincin ayakta kalabilmesi ve uyanık tutulması için dil ve tarih uğrunda çalışmaya mecburuz.” demiştir.\nMustafa Kemal'in bu sözü doğrultusunda aşağıdakilerden hangisinin yapıldığı savunulamaz?",
        choices: {
            correct: "Medeni Kanun’un kabul edilmesi",
            wrong: ["Dil ve Tarih-Coğrafya Fakültesinin açılması", "Yeni Türk alfabesinin oluşturulması", "Millet Mekteplerinin açılması", "Türk Tarih Tezi’nin oluşturulması"]
        }
    }, {
        question_string: "Mustafa Kemal, Birinci Dünya Savaşı sırasında Enver Paşa’nın Arap alfabesiyle okumayı kolaylaştırmak için harflerin bitişik değil ayrı yazılması yolundaki girişimini “Harp zamanı, harf zamanı değildir. Harp olurken harfle oynamak olur mu?” diye eleştirmiştir.\nYaptığı inkılaplar düşünülerek Mustafa Kemal'in bu eleştirisinden aşağıdaki yargılardan hangisine ulaşılabilir?",
        choices: {
            correct: "İnkılaplarda uygun zamanın seçilmesi önemlidir.",
            wrong: ["İnkılaplar gerçekleştirilirken kişi veya gruplara ayrıcalık tanımamak gerekir.", "İnkılap sürecinde ilgililere yetki ve sorumluluk birlikte verilmelidir.", "İnkılaplarda sonuç alabilmek için eski ile yeniyi birlikte sürdürmek gerekir.", "İnkılaplar yapılırken uygulamaların yakından takibi sonucu olumlu etkiler."]
        }
    }];

    function changeColor() {
        myColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css('background-color', myColor);
        $('.quiz-box').css('color', '#fff');
        //$('.option-input:checked::after').css('background', myColor);
    };

    // An object for a Quiz, which will contain Question objects.
    var Quiz = function(quiz_name) {
            // Private fields for an instance of a Quiz object.
            this.quiz_name = quiz_name;

            // This one will contain an array of Question objects in the order that the questions will be presented.
            this.questions = [];
        }
        // A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
    Quiz.prototype.add_question = function(question) {
        // Randomly choose where to add question
        //var index_to_add_question = Math.floor(Math.random() * this.questions.length);
        var index_to_add_question = this.questions.length;
        this.questions.splice(index_to_add_question--, 0, question);
    }
    Quiz.prototype.render = function(container) {

        changeColor();

        // For when we're out of scope
        var self = this;

        // Hide the quiz results modal
        //$('#quiz-results').hide();

        // Write the name of the quiz
        //$('#quiz-name').text(this.quiz_name);

        // Create a container for questions
        var question_container = $('<div>').attr('id', 'question').appendTo(container);

        // Helper function for changing the question and updating the buttons
        function change_question() {

            self.questions[current_question_index].render(question_container);
            $('#prevButton').prop('disabled', current_question_index === 0);
            $('#nextButton').prop('disabled', current_question_index === self.questions.length - 1);

            // Determine if all questions have been answered
            var all_questions_answered = true;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === null) {
                    all_questions_answered = false;
                    break;
                }
            }
            $('#submit-button').prop('disabled', !all_questions_answered);
        }

        // Render the first question
        var current_question_index = 0;
        change_question();

        // Add listener for the previous question button
        $('#prevButton').click(function() {
            if (current_question_index > 0) {
                current_question_index--;
                change_question();
            }
        });

        // Add listener for the next question button
        $('#nextButton').click(function() {
            if (current_question_index < self.questions.length - 1) {
                current_question_index++;
                change_question();
                changeColor();
            }
        });

        // Add listener for the submit answers button
        $('#submitButton').click(function() {
            changeColor();
            // Determine how many questions the user got right
            var score = 0;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
                    score++;
                }
            }

            // Display the score with the appropriate message
            var percentage = (score / self.questions.length);

            var scoremessage = self.questions.length + " soruda " + score + " doğru. ";
            var icon = '';
            var chartcolor = '';
            console.log(percentage);

            $('.percentage').data('percent', percentage * 100);
            $('.percentage span').text(percentage);

            var message;
            if (percentage === 1) {
                icon = "fa fa-smile-o";
                message = 'Tebrikler! Tarihin iyiymiş!';
                chartcolor = "green";
            } else if (percentage >= .75) {
                icon = "fa fa-smile-o";
                message = 'Tebrikler! Tarihin fena değilmiş!';
                chartcolor = "green";
            } else if (percentage >= .5) {
                icon = "fa fa-meh-o";
                message = 'Biraz daha tarih çalışmalısın!';
                chartcolor = "orange";
            } else {
                icon = "fa fa-meh-o";
                message = 'Git ve tarih çalış!';
                chartcolor = "red";
            }
            $('.score-label h1').html('<small>Merhaba </small>' + username + ', ' + 'Skorun:<i class="smiley"></i>');
            $('.message').text(message);
            $('.score-detail h3').text(scoremessage);
            $('.smiley').addClass(icon);
            $('#question-box').hide();
            $('#result').show();
            $('.percentage').easyPieChart({
                animate: 1000,
                lineWidth: 4,
                onStep: function(value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function(value, to) {
                    this.$el.find('span').text(Math.round(to));
                },
                barColor: chartcolor
            });
            $('#prevButton, #nextButton, #submitButton').hide();
            $('.navigation-buttons #resultButton').show();
        });
        $('#resultButton').click(function() {
            changeColor();
            $('#result').hide();
            var table = $('#result-stats table').find('tbody');
            var tr;
            for (var i = 0; i < self.questions.length; i++) {
                tr = $('<tr>');
                if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
                    tr.append('<td><i class="fa fa-check-circle"></i>' + self.questions[i].question_string + '</td>');
                } else {
                    tr.append('<td><i class="fa fa-times-circle"></i>' + self.questions[i].question_string + '</td>');
                }
                if (self.questions[i].choices[self.questions[i].user_choice_index] !== undefined) {
                    tr.append('<td>' + self.questions[i].choices[self.questions[i].user_choice_index] + '</td>');
                } else {
                    tr.append('<td>' + '<span class="grey">Cevaplanmadı</span>' + '</td>');
                }
                tr.append('<td>' + self.questions[i].choices[self.questions[i].correct_choice_index] + '</td>');
                tr.appendTo(table);
            }
            $('#result-stats').show();
            $('#resultButton').hide()
        });
        // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
        question_container.bind('user-select-change', function() {
            var all_questions_answered = true;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === null) {
                    all_questions_answered = false;
                    break;
                }
            }
            $('#submit-button').prop('disabled', !all_questions_answered);
        });
    }
    var Question = function(count, question_string, correct_choice, wrong_choices) {
            this.question_string = count + ". " + question_string;
            this.choices = [];
            this.user_choice_index = null; // Index of the user's choice selection

            // Random assign the correct choice an index
            this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
            var number_of_choices = wrong_choices.length + 1;
            for (var i = 0; i < number_of_choices; i++) {
                if (i === this.correct_choice_index)
                    this.choices[i] = correct_choice;
                else {
                    var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
                    this.choices[i] = wrong_choices[wrong_choice_index];

                    // Remove the wrong choice from the wrong choice array so that we don't pick it again
                    wrong_choices.splice(wrong_choice_index, 1);
                }
            }
        }
        // A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
    Question.prototype.render = function(container) {
        // For when we're out of scope
        var self = this;

        // Fill out the question label
        var question_string_h2;
        if (container.children('h2').length === 0) {
            question_string_h2 = $('<h2>').appendTo(container);
        } else {
            question_string_h2 = container.children('h2').first();
        }
        question_string_h2.text(this.question_string);

        // Clear any radio buttons and create new ones
        if (container.children('label').length > 0) {
            container.children('label').each(function() {
                var radio_button_id = $(this).attr('id');
                $(this).remove();
                container.children('label[for=' + radio_button_id + ']').remove();
            });
        }

        for (var i = 0; i < this.choices.length; i++) {

            // Create the label
            var choice_label = $('<label>')
                .attr('for', 'choices-' + i)
                .appendTo(container);

            // Create the radio button
            var choice_radio_button = $('<input>')
                .attr('id', 'choices-' + i)
                .attr('type', 'radio')
                .attr('name', 'choices')
                .attr('value', 'choices-' + i)
                .attr('class', 'option-input radio')
                .attr('checked', i === this.user_choice_index)
                .appendTo(choice_label);

            choice_label.append(this.choices[i]);

        }
        // Add a listener for the radio button to change which one the user has clicked on
        $('input[name=choices]').change(function(index) {
            var selected_radio_button_value = $('input[name=choices]:checked').val();

            // Change the user choice index
            self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));

            // Trigger a user-select-change
            container.trigger('user-select-change');
        });
    }
    $(document).ready(function() {
        changeColor();
        $('#name-input-box').css('border-bottom', 'solid thin ' + myColor);
        var quiz = new Quiz('My Quiz');
        for (var i = 0; i < all_questions.length; i++) {
            var question = new Question((i + 1), all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);

            // Add the question to the instance of the Quiz object that we created previously
            quiz.add_question(question);
        }
        // Render the quiz
        var quiz_container = $('#question-box');
        $('.navigation-buttons').hide();
        $('#result').hide();
        $('#result-stats').hide();
        $('#name-form').on('submit', function(event) {
            event.preventDefault();
            username = $('#name-input-box').val();
            if (username !== '' && username !== undefined) {
                $('.name-box').hide();
                quiz.render(quiz_container);
                $('.navigation-buttons').show();
                $('#resultButton').hide();
            }
        });
    });

})(jQuery);