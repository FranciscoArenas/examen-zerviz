class AddProfileFieldsToUsers < ActiveRecord::Migration[7.1]
  def change
    change_table :users, bulk: true do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :role
      t.string :status
      t.text :bio
      t.string :company
      t.string :location
      t.string :phone_number
      t.string :website
      t.string :github_handle
      t.boolean :two_factor_enabled, default: false, null: false
      t.string :auth_token
    end
  end
end
