import mongoose from 'mongoose'; 

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',   // Make sure the reference matches your model
    required: true
  },
  items: [{
    productId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',  // Reference to the Product model
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    totalPrice: Number   // Optionally calculate based on quantity and product price
  }]
});

export default mongoose.model('Cart', cartSchema);
