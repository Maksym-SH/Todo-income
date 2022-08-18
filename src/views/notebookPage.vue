<template>
  <section class="notebook-section">
    <div class="notebook-section__square-animation">
      <span v-for="n in 8" :key="n"></span>
    </div>
    <h1 align="center">Ваш блокнот</h1>
    <div class="container-lg">
      <div class="notebook-section__info">
        <p>Как этим пользоваться?</p>
        <ul class="notebook-section__info__list">
          <li>Сначала нужно создать заметку, написав ее</li>
          <li>
            Нажатие на кнопку "
            <b-icon icon="check2" scale="1" variant="light"></b-icon>
            " сохраняет вашу заметку.
          </li>
          <li>Заметки можно пересмотреть в любое время.</li>
        </ul>
      </div>
    </div>
    <div class="note-section">
      <div class="note-section__wrapper">
        <div
          class="note-section__note"
          :class="[darkTheme ? 'dark-class' : 'light-class']"
        >
          <div class="note-section__note__wrapper">
            <div
              class="note-section__note__title"
              :class="[darkTheme ? 'dark-class' : 'light-class']"
            >
              <h5>Название:</h5>
              <input
                type="text"
                maxlength="25"
                @input="callChangeNoteTitle($event.target.value)"
                :value="noteTitle"
                :class="[darkTheme ? 'input-dark' : 'input-light']"
              />
            </div>
            <div class="note-section__note__buttons">
              <b-button class="btn" @click="callChangeDarkTheme">
                <b-icon icon="sun" scale="1" variant="light"></b-icon>
              </b-button>
              <b-button
                variant="success"
                class="btn"
                title="Зберегти"
                :disabled="!noteTitle"
                @click="callSaveNotes"
              >
                <b-icon icon="check2" scale="1" variant="light"></b-icon>
              </b-button>
              <b-button
                variant="danger"
                class="btn"
                title="Видалити текст"
                :disabled="!note"
                @click="callChangeNote('')"
              >
                <b-icon icon="backspace" scale="1" variant="light"></b-icon>
              </b-button>
            </div>
          </div>
          <textarea
            @input="callChangeNote($event.target.value)"
            :value="note"
            :class="[darkTheme ? 'dark-class' : 'light-class']"
          ></textarea>
        </div>
        <div class="container">
          <div class="note-section__save-note" v-if="saveNotes.length">
            <h4>Ваши сохраненные заметки</h4>
            <div
              class="note-section__save-note__wrapper"
              :class="[darkTheme ? 'dark-class' : 'light-class']"
            >
              <div
                class="note-section__save-note__wrapper__item"
                v-for="(note, index) in saveNotes"
                :key="index"
                @click="callSelectSaveNote(index)"
              >
                <p>{{ note.noteTitle }}</p>
                <b-button
                  class="delete-task"
                  variant="danger"
                  title="Удалить"
                  @click.stop="callDeleteSaveNote(index)"
                >
                  <b-icon icon="x-circle" scale="1" variant="light"></b-icon>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["note", "noteTitle", "saveNotes", "darkTheme"]),
  methods: mapActions([
    "callChangeNote",
    "callChangeNoteTitle",
    "callSaveNotes",
    "callReturnNodesList",
    "callSelectSaveNote",
    "callDeleteSaveNote",
    "callChangeDarkTheme",
  ]),
  mounted() {
    if (localStorage.note) {
      this.callChangeNote(localStorage.note);
    }
    if (localStorage.title) {
      this.callChangeNoteTitle(localStorage.note);
    }
    if (localStorage.save) {
      this.callReturnNodesList(JSON.parse(localStorage.save));
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/square-animation.scss";
.notebook-section {
  &__info {
    margin-top: 30px;
  }
  .note-section {
    width: 90%;
    margin: 0 auto;
    max-width: 1500px;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      width: 100%;
      padding: 30px 15px;
    }
    &__save-note {
      margin-top: 30px;
      &__wrapper {
        width: 100%;
        margin: 0 auto;
        overflow: auto;
        display: flex;
        align-items: center;
        height: 150px;
        border-radius: 20px;
        padding: 10px;
        &__item {
          cursor: pointer;
          width: 150px;
          min-width: 150px;
          height: 100%;
          margin: 0 10px;
          border-radius: 20px;
          padding: 10px;
          color: $black;
          background-color: $light-purple;
          position: relative;
          .delete-task {
            position: absolute;
            bottom: 5px;
            left: 33%;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    &__note {
      width: 70%;
      border-radius: 20px;
      padding: 10px;
      min-width: 270px;
      margin: 0 auto;
      background-color: $light-black;
      height: 700px;
      &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__title {
        display: flex;
        input {
          margin-left: 10px;
          padding: 5px;
          height: 20px;
          outline: none;
          border: none;
          background-color: transparent;
          width: 180px;
        }
      }
      &__buttons {
        margin-bottom: 10px;
        display: flex;
        .btn {
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
        }
      }

      textarea {
        height: 90%;
        width: 100%;
        outline: 1px solid #fff;
        padding: 10px;
        overflow: auto;
        font-size: 20px;
        border-radius: 10px;
        resize: none;
      }
      @media (max-width: $media-sm) {
        width: 100%;
        textarea {
          height: 85%;
        }
      }
      @media (max-width: $media-xs) {
        &__wrapper {
          flex-direction: column-reverse;
          align-content: center;
        }
      }
    }
  }
}
.light-class {
  background-color: $white !important;
  color: $black !important;
}
.dark-class {
  background-color: $black !important;
  color: $white !important;
}
.input-dark {
  color: $white;
  border-bottom: 1px solid $white !important;
}
.input-light {
  color: $black;
  border-bottom: 1px solid $black !important;
}
</style>
