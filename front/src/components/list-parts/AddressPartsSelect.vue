<template>
  <li>
    <h2>
      <input type="radio" :id="addInfo.address_id" name="shipping" @change="selectedRadio(addInfo, $event)">
      配送先{{ index + 1 }}
    </h2>
    <table class="ship-list_detail">
      <tr>
        <th>お名前 <span>:</span></th>
        <td>{{ addInfo.addressee }}</td>
      </tr>
      <tr>
        <th>ご住所 <span>:</span></th>
        <td>
          <div>&#12306;{{ addInfo.postal_code }}</div>
          <div>{{ $store.state.prefOptions[addInfo.prefecture].label }}{{ addInfo.municipality }}{{ addInfo.address }}</div>
        </td>
      </tr>
      <tr>
        <th>お電話番号<span>:</span></th>
        <td>{{ addInfo.tel }}</td>
      </tr>
    </table>
    <BtnMediumWhite btn-name="編集" @click="editAdd(addInfo.address_id, $event)" />
  </li>
</template>

<script>
import BtnMediumWhite from "@/components/buttons/BtnMediumWhite";

export default {
  name: 'AddressPartsSelect',
  components: {
    BtnMediumWhite,
  },
  props: {
    index: Number,
    addInfo: Object
  },
  emits: ['selectedShipAdd'],
  setup(_, context) {
    /***
     * 選択した住所ID受け渡し
     * @param id: address_id
     * @param name: 配送先名前
     * @param ev
     */
    const selectedRadio = (selectedData, ev) => {
      context.emit('selectedShipAdd', selectedData);
      ev.preventDefault();
    }

    /***
     * 配送先編集
     * @param id: address_id
     * @param ev
     */
    const editAdd = (id, ev) => {
      window.location.href = '/shipping-register?address_id=' + id;
      ev.preventDefault();
    };

    return {
      selectedRadio,
      editAdd,
    }
  }
}
</script>

<style scoped lang="scss">
li {
  position: relative;
  margin-bottom: remSize(16);
  padding: remSize(14) remSize(17) remSize(20);
  border: 1px solid #e2e2e2;
  border-radius: remSize(20);

  h2 {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: remSize(18) remSize(16);
    text-align: left;
    background-color: rgba(211,235,205,0.4);
    border-radius: remSize(20) remSize(20) 0 0;
    font-size: remSize(18);
    font-weight: bold;
    color: $strongFontColor;

    input[type=radio] {
      appearance: none;
      position: relative;
      display: inline-block;
      height: remSize(20);
      width: remSize(20);
      margin: remSize(6);
      border-radius: 50%;
      border: 1px solid $strongFontColor;
      color: #fff;

      &:before {
        content: "";
        display: block;
        width: remSize(12);
        height: remSize(12);
        margin: 3px;
        border-radius: 50%;
      }

      &:checked:before {
        background: $strongFontColor;
      }
    }
  }

  table {
    margin: remSize(63) 0 remSize(16);
    font-size: remSize(15);
    font-weight: 500;
    text-align: left;

    th {
      position: relative;
      width: 30%;
      font-weight: 500;
      vertical-align: top;

      span {
        position: absolute;
        right: remSize(8);
      }
    }
  }
}

.ship-list_btnDel {
  position: absolute;
  top: remSize(16);
  right: remSize(16);
}

.detail-modal_close {
  position: absolute;
  top: remSize(28);
  left: remSize(25);
  border: none;
  background-color: #fff;
}

.ship-list_modalDelBtn {
  margin: remSize(55) 0 remSize(24);
}
</style>
