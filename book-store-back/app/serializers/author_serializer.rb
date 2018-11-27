class AuthorSerializer < ActiveModel::Serializer
  has_many :books
  attributes :id, :fullName, :age, :books, :books_count

  def books_count
    object.books.length
  end

end 
