(function($) {
    var colors = ["#583119"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: "Kayseri yakınlarındaki Kültepe’de yapılan kazılarda, Asurlu tüccarlara ait karum adı verilen bir pazar yeri ve çivi yazısıyla yazılmış ticari ve hukuki içerikli kil tabletler bulunmuştur.\nTarih biliminde bu bilgilere,\nI. paleografi,\nII. arkeoloji,\nIII. antropoloji\nbilimlerinin hangilerinden yararlanılarak ulaşıldığı savunulabilir?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız II", "I, II ve III", "Yalnız III", "Yalnız I"]
        }
    }, {
        question_string: "İslamiyetten önce Türklerde,\nI. yün dokumacılığının yapılması,\nII. ticarette Çin’den alınan ipeğin koyun ve sığırla takas edilmesi,\nIII. orduda ve ulaşımda atlardan yararlanılması\ndurumlarından hangilerinin hayvancılığın toplumsal hayatta önemli bir yeri olduğunu gösterdiği savunulabilir?",
        choices: {
            correct: "I, II ve III",
            wrong: ["I ve II", "Yalnız III", "Yalnız II", "Yalnız I"]
        }
    }, {
        question_string: "I. Ömer: Sınırların genişlemesiyle devlet teşkilatlanmasının hızlanması\nII. Osman: Kıbrıs’ın fethedilmesi\nIII. Ebubekir: Kur’an-ı Kerim’in çoğaltılması\nIV. Ali: İslam dünyasındaki ayrılıkların derinleşmesi\nV. Muaviye: Halifeliğin saltanata dönüşmesi\nYukarıdaki eşleştirmelerden hangisi yanlıştır?",
        choices: {
            correct: "III",
            wrong: ["I", "II", "IV", "V"]
        }
    }, {
        question_string: "Osmanlı Beyliği’nin kısa sürede gelişmesinde Bizans İmparatorluğu’nun aşağıdaki durumlarından hangisinin etkili olduğu savunulamaz?",
        choices: {
            correct: "Sanatçıların din ve imparatorluk için çalışması",
            wrong: ["Taht kavgalarının yaşanması", "Halka ağır vergiler yüklenmesi", "Tekfurların kendi başlarına hareket etmesi", "Din ve mezhep anlaşmazlıklarının sık yaşanması"]
        }
    }, {
        question_string: "XVII. yüzyılda Osmanlı Devleti, iltizam usulünde yaptığı değişiklikle yüklü bir peşin ödemeyi de öngören malikâne usulünü getirmiştir. Buna göre mukaatalar mültezimlere daha önceki gibi üç yıllık sürelerle değil, sürekli olarak ihale edilmeye başlanmıştır.\nYapılan bu değişiklikle güdülen amaç aşağıdakilerden hangisidir?",
        choices: {
            correct: "Hazineye daha fazla gelir sağlamak",
            wrong: ["Yeniçeri Ocağının kaldırılmasına ortam hazırlamak", "Tek hazine sisteminden çoklu hazine sistemine geçmek", "Büyük toprak sahiplerinin ortaya çıkmasını engellemek", "Âyanların reaya temsilcisi olmasını önlemek"]
        }
    }, {
        question_string: "Osmanlı Devleti’nde dağılmayı önleme çalışmalarından birisi de Tanzimat Fermanı’nın ilan edilmesidir. Ancak Tanzimat Fermanı toplumun tamamı tarafından kabul görmemiş, birtakım tepkilere neden olmuştur. Tanzimat Fermanı’na bu tepkilerin oluşmasında,\nI. kimi Müslümanların, Müslüman olmayanlara tanınan hakları yadırgaması,\nII. öngörülen reformların yetersiz kalması,\nIII. Müslüman olmayanların ayrılıkçı hareketlerinin devam etmesi\ndurumlarından hangilerinin neden olduğu savunulabilir?",
        choices: {
            correct: "I, II ve III",
            wrong: ["I ve II", "Yalnız III", "Yalnız II", "Yalnız I"]
        }
    }, {
        question_string: "Aşağıdakilerden hangisinin Osmanlı Devleti’nde yerli tüccar kesiminin güçlenmesini engellediği savunulamaz?",
        choices: {
            correct: "Üretimin tarıma dayalı olması",
            wrong: ["Osmanlı sanayisinin rekabet gücünü giderek yitirmesi", "Osmanlı deniz taşımacılığının yetersiz olması", "Yabancılara kapitülasyonlarla ayrıcalıklar tanınması", "İpek ve Baharat yollarının önemini kaybetmesi"]
        }
    }, {
        question_string: "Birinci Dünya Savaşı sonrasında Anlaşma Devletlerinin baskısıyla Ermeni tehcirinde görevli Osmanlı memurlarının yargılanması için divanıharp oluşturulmuştur. Osmanlı Devleti bu olağanüstü mahkemelerde bağımsız yargıçların görev alması için İsveç, Hollanda, İspanya ve Danimarka hükûmetlerinden bir komisyon kurulması isteğinde bulunmuş, ancak İngiltere ve Fransa’nın baskısıyla bu komisyon oluşturulamamıştır.\nİngiltere ve Fransa’nın bu tutumunun aşağıdakilerden hangisine dayandığı savunulamaz?",
        choices: {
            correct: "Osmanlı hukuk sistemini düzenleme",
            wrong: ["Diğer Avrupa devletlerinin soruna müdahalesini engelleme", "Mahkemelerden kendi istekleri doğrultusunda karar aldırtma", "Osmanlı Devleti’ndeki Ermenilerin haklarını koruma", "Osmanlı Devleti üzerinde baskı kurma"]
        }
    }, {
        question_string: "Mondros Ateşkes Anlaşması metninde Kilikya, Mezopotamya gibi sınırları belli olmayan bölge adları kullanılmıştır.\nAnlaşma Devletlerinin yukarıdaki uygulamayla amaçlarının aşağıdakilerden hangisi olduğu savunulabilir?",
        choices: {
            correct: "İşgal edecekleri alanı genişletmek ve tepkiyi azaltmak",
            wrong: ["İşgaller karşısında halkın desteğini almak", "Kendi aralarındaki sorunları gidermek", "İstanbul Hükûmetiyle iş birliği yaptıklarını göstermek", "Mebuslar Meclisini kapatmak"]
        }
    }, {
        question_string: "Amerika Birleşik Devletleri Başkanı Wilson, dünya barışını sağlamak amacıyla bazı ilkeler belirlemiştir. Bu ilkelere göre,\nI. bütün milletleri içine alan bir kurul oluşturulması,\nII. savaşta yenilmiş devletlerden savaş tazminatı alınmaması,\nIII. her milletin kendi kaderini kendisinin kararlaştırması\nönerilerinden hangilerinin, Fransa ve İngiltere gibi büyük devletlerin, sömürü düzenlerini kaybedecekleri endişesiyle topraklarında uygulanmasına karşı çıktıkları savunulabilir?",
        choices: {
            correct: "Yalnız III",
            wrong: ["II ve III", "I ve II", "Yalnız II", "Yalnız I"]
        }
    }, {
        question_string: "Ahmet:\nErzurum Kongresi kararlarının birinci maddesi “Doğu vilayetleri ile Trabzon ve Canik (Samsun) sancağı birbirinden ayrılmaz ve Osmanlı topluluğunun bir parçası olmak üzere bir bütün teşkil eder.” şeklindedir, demiştir. Onur da bu maddenin,\nI. Arap,\nII. Ermeni,\nIII. Rum\nazınlıklarının bölgedeki yıkıcı faaliyetlerini önlemek amacıyla konduğunu söylemiştir. Onur, yukarıdaki azınlıklardan hangilerini söyleseydi Ahmet’e doğru bilgi vermiş olurdu?",
        choices: {
            correct: "II ve III",
            wrong: ["Yalnız II", "Yalnız III", "Yalnız I", "I ve III"]
        }
    }, {
        question_string: "Aşağıdakilerden hangisi, 1921 yılı sonuna kadar TBMM Hükûmetine karşı çıkarılan ayaklanmaların nedenlerinden biri değildir?",
        choices: {
            correct: "Saltanatın kaldırılmasının bazı çevrelerde tepkiyle karşılanması",
            wrong: ["Anlaşma Devletlerinin ulusal mücadeleyi engellemek istemesi", "Bazı bölgelerde Kuvayımilliyecilerin disiplinsiz davranması", "Azınlıkların bağımsız devlet kurmak için çalışması", "Kimi kesimlerin ulusal mücadeleyi dinsizlik olarak tanıtması"]
        }
    }, {
        question_string: "Sakarya Savaşı kazanılmasına karşın Yunan ordusunu kesin yenilgiye uğratan Başkomutan Meydan Savaşı’nın yaklaşık bir yıl sonra yapılmasına aşağıdakilerden hangisinin neden olduğu savunulabilir?",
        choices: {
            correct: "Türk ordusunun eksiklerinin tamamlanması",
            wrong: ["Ayaklanan Çerkez Ethem birliklerinin dağıtılması", "Ordunun ihtiyaçlarını karşılamak için Tekâlif-i Milliye Emirlerinin çıkarılması", "Doğu Cephesi’nde fiili mücadelenin sona ermesinin beklenmesi", "İtalyanların birliklerini Anadolu’dan çekmeye başlaması"]
        }
    }, {
        question_string: "Aşağıdakilerden hangisi Atatürk önderliğinde yapılan Kurtuluş Savaşı ve inkılaplarla sağlanan değişimlerden biri değildir?",
        choices: {
            correct: "Ülke idaresinde Divanıhümayundan Bakanlıklar sistemine geçilmesi",
            wrong: ["Mutlakiyet yönetiminden cumhuriyete geçilmesi", "Toplumun geleneksel yapısının çağdaşlaştırılması", "Ümmet anlayışından sonra ulus anlayışının benimsenmesi", "Teokratik düzenden laik sisteme geçilmesi"]
        }
    }, {
        question_string: "Hindistan’daki bir tarikatın lideri olan Ağa Han ile İngiltere Kralı’nın özel danışmanı Hintli Emir Ali, Başbakan İsmet Paşa’ya bir mektup yollayarak halifelik kurumuna dokunulmamasını rica etmişlerdir. Bu durumun, halifelikle ilgili olarak\nI. bu kurumun, tüm Müslümanlar üzerinde siyasal gücünün olduğu,\nII. yabancıların, bu kurumu Türkiye’nin içişlerine müdahale amacıyla kullanmak istedikleri,\nIII. bu kurumun varlığının ülkede tartışma konusu olduğu\ndurumlarından hangilerine kanıt olduğu savunulabilir?",
        choices: {
            correct: "II ve III",
            wrong: ["Yalnız III", "Yalnız II", "Yalnız I", "I ve III"]
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