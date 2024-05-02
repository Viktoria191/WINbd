const { hashSync } = require('bcrypt');
const axios = require('axios');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [{ name: 'Alex', email: '1@1', hashpass: hashSync('1', 10) }],
      {}
    );

    await queryInterface.bulkInsert(
      'News',
      [
        {
          title:
            'Астрономы будут получать уведомления о регистрации гравитационных волн в течение 30 секунд',
          text: 'Команды обсерваторий LIGO-Virgo-KAGRA работают над созданием системы оповещения, которая будет предупреждать астрономов о новых гравитационных волнах в течение 30 секунд. Если предупреждение поступит достаточно рано, возможно, удастся определить источник и наблюдать за последующим свечением.',
          img_url: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/bb3/924/f37/bb3924f37df13e2fb78dde11e5262860.jpeg',
          quote:
            'Любое событие в космосе порождает гравитационные волны, и чем крупнее событие, тем больше возмущений.',
          userId: 1,
        },
        {
          title:
            'В Huawei Pura 70 более 90% компонентов производятся китайскими компаниями',
          text: 'Новый флагман Huawei, серия Pura 70, оказался практически полностью отечественным: более 90% его компонентов произведены китайскими компаниями, за исключением процессора и основной камеры самой дорогой модели. В числе поставщиков такие компании, как OFilm, Lens Technology, Goertek, Csun, Sunny Optical, BOE и Crystal-Optech.',
          img_url: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/68b/930/310/68b930310c56d952b6bd4c2bbca138aa.jpg',
          quote:
            'Ранее первые тестировщики устройств установили, что в Pura 70 используется процессор Huawei Kirin 9010, изготовленный с использованием так называемого 7-нм процесса SMIC N+2.',
          userId: 1,
        },
        {
          title: 'Google провела масштабную кадровую реформу',
          text: 'Google объединила несколько подразделений компании, стремясь быстрее продвигаться в области искусственного интеллекта. В результате руководитель DeepMind получил больше власти, а глава Pixel будет также курировать Android.',
          img_url: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/579/48d/452/57948d4521a6f467fa5c34bf3b34193a.jpg',
          quote:
            'Также стало известно, что Google уволила всю команду Python. Об этом сообщил Томас Воутерс, релиз-менеджер Python 3.12 и 3.13.',
          userId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
