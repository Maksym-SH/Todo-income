<template>
  <section class="todo-section">
    <div class="container">
      <h2 align="center">Ваш список завдань</h2>
      <div class="todo-section__info-list">
        <p>Як цим користуватися?</p>
        <ul>
          <li>
            Для створення завдання потрібно його написати у спеціальному місці
            для вводу
          </li>
          <li>Пересувайте завдання у категорії виконання</li>
        </ul>
      </div>
      <b-button v-b-modal.modal-center class="button-create-task">
        Створення завдання
      </b-button>
      <b-modal id="modal-center"
        @cancel="callChangeClear"
        @ok="callCreateTask"
        centered title="Створення завдання" >
        <p class="my-4">
          <label for="name">Назва завдання</label>
          <input name="name" autocomplete="off" class="popap-input" type="text" @input="callChangeTaskName($event.target.value)" />
          <label for="name" class="d-block">Додати підзадачі</label>
          <input
            name="name"
            class="popap-input w-50 p-1"
            type="text"
            @input="callSubItem($event.target.value)"
            ref="inputSubTask"
            :value="subItem"
            autocomplete="off"
          />
          <b-button
            class="p-1 mt-2"
            variant="success"
            :disabled="subItem === ''"
            @click="callChangeSubTask"
            @keyup.enter="callChangeSubTask()"
          >
            Додати підзадачу
          </b-button>
          <ul>
            <li v-for="(item,index) in subtasks"  :key="index">{{item.name}}</li>
          </ul>
        </p>
      </b-modal>
      <div class="todo-section__wrapper">
        <div class="todo-section__wrapper__window">
          <h3>Зробити</h3>
          <div class="todo-section__wrapper__todo-list">
            <transition-group name="task">
            <div
              class="todo-section__wrapper__todo-list__item"
              v-for="(item,index) in todo" :key="index"
            >
              <b-button variant="success" class="button-right" @click="callChangeProgress(['todo', 'inProgress', index])"><img src="../assets/icon/arrow-right.svg" alt=""></b-button>
              <p>{{item.title ? item.title : 'Без назви'}}</p>
              <div v-if="item.subTitle !== 'empty'">
                <h6>Додаткові завдання</h6>
                <ul>
                  <li v-for="(list, indexList) in item.subTitle" :key="indexList">
                    {{list.name}}
                  </li>
                </ul>
              </div>
            </div>
            </transition-group>
          </div>
        </div>
        <div class="todo-section__wrapper__window">
          <h3>У процесі</h3>
         <div class="todo-section__wrapper__todo-list">
            <transition-group name="task">
            <div
              class="todo-section__wrapper__todo-list__item"
              v-for="(item,index) in inProgress" :key="index"
            >
              <b-button variant="success" class="button-right" @click="callChangeProgress(['inProgress', 'done', index])"><img src="../assets/icon/arrow-right.svg" alt=""></b-button>
              <p>{{item.title ? item.title : 'Без назви'}}</p>
              <div v-if="item.subTitle !== 'empty'">
                <h6>Додаткові завдання</h6>
                <ul>
                  <li v-for="(list, indexList) in item.subTitle" :key="indexList"
                  :class="{ 'line-through': list.done }">
                    <input type="checkbox" @change="callSubtaskDone([index, indexList])"
                    :checked='list.done'
                     />
                    {{list.name}}
                  </li>
                </ul>
              </div>
            </div>
            </transition-group>
          </div>
        </div>
        <div class="todo-section__wrapper__window">
          <h3>Завершено</h3>
        <div class="todo-section__wrapper__todo-list">
            <transition-group name="task">
            <div
              class="todo-section__wrapper__todo-list__item"
              v-for="(item,index) in done" :key="index"
            >
              <b-button class="button-left" variant="danger" @click="callChangeProgress(['done', 'delete', index])">
                <b-icon  icon="x-circle" scale="1" variant="light"></b-icon>
              </b-button>
              <p>{{item.title ? item.title : 'Без назви'}}</p>
              <div v-if="item.subTitle !== 'empty'">
                <h6>Додаткові завдання</h6>
                <ul>
                  <li v-for="(list, indexList) in item.subTitle" :key="indexList"
                  class="line-through">
                    {{list.name}}
                  </li>
                </ul>
              </div>
            </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["todo", "inProgress", "done", "subtasks", "subItem"]),
  methods:{
    ...mapActions([
      "callChangeClear",
      "callSubItem",
      'callChangeSubTask',
      'callCreateTask',
      'callChangeTaskName',
      'callUpdateList',
      'callSubtaskDone',
      'callChangeProgress'
    ]),
  },
  mounted(){
    this.callUpdateList();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.task-enter-active, .task-leave-active {
  transition: opacity .6s;
}
.task-enter, .task-leave-to{
    opacity: 0;
}
.todo-section {
  background: linear-gradient(0deg, $dark-grey, $dark-orange);
  padding-top: 150px;
  padding-bottom: 50px;
  &__info-list {
    margin-top: 20px;
    max-width: 300px;
  }
  .button-create-task {
    background-color: $black;
    border-radius: 15px;
    margin: 0 auto;
    display: block;
    padding: 15px;
  }
  &__wrapper {
    display: flex;
    justify-content: center;

    &__window {
      margin: 15px;
      margin-bottom: 20px;
      width: 282px;
      h3 {
        border-radius: 15px;
        padding: 10px 10px 20px 10px;
        color: $white;
        text-align: center;
        margin-bottom: -10px;
      }
      &:first-child {
        h3 {
          background-color: $blue;
        }
      }
      &:nth-child(2) {
        h3 {
          background-color: $purple;
        }
      }
      &:nth-child(3) {
        h3 {
          background-color: $green;
        }
      }
      &:first-child {
        .todo-section__wrapper__todo-list {
          &__item {
            background-color: $blue;
          }
        }
      }
      &:nth-child(2) {
        .todo-section__wrapper__todo-list {
          &__item {
            background-color: $purple;
          }
        }
      }
      &:nth-child(3) {
        .todo-section__wrapper__todo-list {
          &__item {
            background-color: $green;
          }
        }
      }
    }
    &__todo-list {
      border-radius: 0 0 15px 15px;
      background-color: $light-grey;
      color: $black;
      min-height: 200px;
      width: 100%;
      height: 100%;
      padding: 15px;
      min-width: 282px;
      &__item {
        cursor: pointer;
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border-radius: 15px;
        user-select: none;
        background-color: $red;
        color: $white;
        position: relative;
        ul {
          list-style: none;
          padding-left: 10px;
        }
        p {
          margin-top: 25px;
          word-wrap: break-word;
          text-align: center;
        }
        .button-right,
        .button-left,
        .button-delete{
          position: absolute;
          top:0
        }
        .button-delete{
          top: 10px;
        }
        .button-right{
          border-radius: 0 15px 0 0;
          right: 0;
        }
        .button-left{
              border-radius: 15px 0 0 0;
          left: 0;
        }
      }
      @media(max-width:$media-xs){
        min-width: 100%;
      }
    }
    @media (max-width: $media-md) {
      flex-direction: column;
      align-items: center;
      &__window {
        width: 70%;
      }
      &__todo-list{
        &__item{
          .button-right{
            img{
              transform: rotate(90deg);
            }
          }
          .button-left{
            img{
              transform: rotate(-90deg);
            }
          }
        }
      }
    }
    @media (max-width: $media-xs) {
      &__window {
        width: 100%;
      }
    }
  }
}
.popap-input {
  display: block;
  border: 1px solid $green;
  border-radius: 10px;
  padding-left: 10px;
  width: 100%;
}
.line-through{
  text-decoration: line-through !important;
}
</style>
