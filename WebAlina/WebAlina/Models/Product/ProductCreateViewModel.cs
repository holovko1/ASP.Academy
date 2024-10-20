namespace WebAlina.Models.Product
{
    public class ProductCreateViewModel
    {
        public string Name { get; set; } = String.Empty;
        public decimal Price { get; set; }
        public int CategoryId { get; set; }

        //Фото які приходять до продукту
        public List<IFormFile>? Images { get; set; }
    }
}
