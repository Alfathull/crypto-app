<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Crypto Prices</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="top-area">
        <ion-button shape="round" color="primary" @click="refreshData">
          Refresh
        </ion-button>
      </div>

      <ion-card class="table-card">
        <!-- Header tabel: Rank / Coin / USD -->
        <ion-grid class="table-header">
          <ion-row>
            <ion-col size="2" class="header-col center">
              Rank
            </ion-col>
            <ion-col size="6" class="header-col">
              Coin
            </ion-col>
            <ion-col size="4" class="header-col right">
              USD
            </ion-col>
          </ion-row>
        </ion-grid>

        <!-- List data crypto -->
        <ion-list>
          <CryptoListItem
            v-for="c in cryptosToShow"
            :key="c.id"
            :currency="c"
          />
        </ion-list>
      </ion-card>

      <div v-if="isLoading" class="loading-text">Loading...</div>
      <div v-if="errorMessage" class="error-text">{{ errorMessage }}</div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonCard,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/vue";
import CryptoListItem from "@/components/CryptoListItem.vue";
import { defineComponent } from "vue";
import axios from "axios";

const API_URL = "https://api.coinlore.net/api/tickers/";

export default defineComponent({
  name: "HomePage",
  components: {
    IonCard,
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    CryptoListItem,
  },
  data() {
    return {
      cryptos: [] as any[],
      isLoading: false,
      errorMessage: "",
    };
  },
  computed: {
    // untuk menampilkan misalnya 7 data teratas (seperti contoh soal)
    cryptosToShow(): any[] {
      return this.cryptos.slice(0, 7);
    },
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    async refreshData() {
      this.isLoading = true;
      this.errorMessage = "";
      try {
        const response = await axios.get(API_URL);
        // Type assertion for response.data
        this.cryptos = (response.data as { data: any[] }).data;
      } catch (e) {
        console.error(e);
        this.errorMessage = "Gagal mengambil data dari API.";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<style scoped>
.top-area {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 8px;
}

.table-card {
  margin: 12px 16px;
  border-radius: 18px;
  overflow: hidden;
}

.table-header {
  background-color: #ffe79b; /* agak kuning untuk header */
}

.header-col {
  font-weight: 600;
  font-size: 13px;
  padding: 6px 8px;
}

.header-col.center {
  text-align: center;
}

.header-col.right {
  text-align: right;
}

.loading-text,
.error-text {
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
}

.error-text {
  color: #c0392b;
}
</style>