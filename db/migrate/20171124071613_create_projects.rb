class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.string :img_url, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :projects, :title
    add_index :projects, :creator_id
  end
end
