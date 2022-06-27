const app = Vue.createApp({
    data() {
        return {
            items: [
                { kelas: 'Bronze', primaryC: '#804A00', secondaryC: '#B08D57', harga: 100000, benefits: ['lorem ipsum dolor sit amet', 'Dignissimos eaque ipsam quas deserunt', 'Iure commodi fuga quis praesentium?'] },
                { kelas: 'Silver', primaryC: '#616161', secondaryC: '#E6E7E8', harga: 200000, benefits: ['lorem ipsum dolor sit amet', 'Dignissimos eaque ipsam quas deserunt', 'Iure commodi fuga quis praesentium?'] },
                { kelas: 'Gold', primaryC: '#AE8625', secondaryC: '#F7EF8A', harga: 500000, benefits: ['lorem ipsum dolor sit amet', 'Dignissimos eaque ipsam quas deserunt', 'Iure commodi fuga quis praesentium?'] },
            ]
        }
    },
    methods:{
        gradients(colorOne, colorTwo) {
            return `background-image: linear-gradient(135deg, ${colorOne} 0%, ${colorTwo} 100%);`
        }
    }
})