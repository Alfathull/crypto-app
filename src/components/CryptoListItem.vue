<template>
  <ion-item lines="full" class="crypto-row" v-if="currency">
    <ion-grid>
      <ion-row>
        <!-- Kolom Rank -->
        <ion-col size="2" class="rank-col">
          <div class="label-small">Rank</div>
          <div class="rank-value">{{ currency.rank }}</div>
        </ion-col>

        <!-- Kolom Coin (name + symbol) -->
        <ion-col size="6" class="coin-col">
          <div class="coin-name">{{ currency.name }}</div>
          <div class="coin-symbol">{{ currency.symbol }}</div>
        </ion-col>

        <!-- Kolom Harga USD -->
        <ion-col size="4" class="price-col">
          <div class="label-small">USD</div>
          <div class="price-value">
            {{ Number(currency.price_usd).toFixed(2) }}
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-item>
</template>

<script lang="ts">
import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoListItem",
  components: {
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
  },
  props: {
    currency: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.crypto-row {
  --background: #fff6cc; /* kuning muda mirip contoh soal */
  --padding-start: 0;
  --inner-padding-end: 0;
}

.label-small {
  font-size: 11px;
  color: #666;
}

.rank-col {
  text-align: center;
  border-right: 1px solid #e5d89b;
}

.rank-value {
  font-weight: bold;
  font-size: 16px;
  margin-top: 4px;
  color: #555;
}

.coin-col {
  padding-left: 8px;
}

.coin-name {
  font-weight: 600;
  font-size: 14px;
  color: #555;
}

.coin-symbol {
  font-size: 13px;
  color: #555;
}

.price-col {
  text-align: right;
  padding-right: 8px;
  color: #555;
}

.price-value {
  font-weight: 600;
  font-size: 14px;
  margin-top: 4px;
  color: #555;
}
</style>