import React from 'react';
import styles from '../AddProduct/AddProduct.module.css';

const AddProduct = () => {
  return (
    <div className={styles.prodcontainer}>
      <h2 className={styles.heading}>Add Product</h2>
      <form className={styles.form}>
        <div className={styles.leftSection}>
          <div className={styles.formGroup}>
            <label>Product Title</label>
            <input type="text" placeholder="Enter Product Title" />
          </div>

          <div className={styles.formGroup}>
            <label>Product Description</label>
            <textarea placeholder="Enter product description here..."></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Product Image</label>
            <p>Add Product main Image.</p>
            <input type="file" />
          </div>

          <div className={styles.formGroup}>
            <label>Product Gallery</label>
            <p>Add Product Gallery Images.</p>
            <input type="file" multiple />
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.formGroup}>
            <label>In Stock</label>
            <label className={styles.toggleSwitch}>
              <input type="checkbox" defaultChecked />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>Product Code</label>
            <input type="text" placeholder="Enter Product Code" />
          </div>

          <div className={styles.formGroup}>
            <label>Price</label>
            <input type="text" placeholder="e.g. INR: 1,499" />
          </div>

          <div className={styles.formGroup}>
            <label>Size</label>
           <div className={styles.sizeOptions}>
              <button type="button">S</button>
              <button type="button">M</button>
              <button type="button">L</button>
              <button type="button">XL</button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Gender</label>
            <div className={styles.radioGroup}>
              <label><input type="radio" name="gender" /> Male</label>
              <label><input type="radio" name="gender" /> Female</label>
              <label><input type="radio" name="gender" /> Kids</label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Category <span className={styles.addNew}>Add New</span></label>
            <select>
              <option>Select</option>
              <option>Jeans</option>
              <option>Shirts</option>
              <option>T-Shirts</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Tags</label>
            <input type="text" placeholder="Enter tags separated by commas" />
          </div>

          <div className={styles.formGroup}>
            <label>Status</label>
            <select>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>

          <button type="submit" className={styles.submitBtn}>Submit Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
