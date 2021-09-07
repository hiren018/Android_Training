void main() 
{
  var newlist = new List();
  var newlist1 = new List();
  var list = [0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1];
  int i=0,temp=0, n=list.length,j=n-1;
  
   for(i=0; i<=n-1; i++)
    {
     if(list[i] == 0)
     {
       newlist.add(0);
     }
    else
    {
       newlist1.add(1);
    }
   
   }    
  print(newlist + newlist1);

}