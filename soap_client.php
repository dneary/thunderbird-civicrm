<?
$client =& new SoapClient(null, array(
           'location' => 'http://localhost/drupal/modules/civicrm/extern/soap.php', 
           'uri' => 'http://localhost')
        );

$key = $client->authenticate( 'username', 'passwd' );
$returnProperties = null;

$result =& $client->get_contact_id( $key, 'Dave', 'Neary', 'dneary@gnome.org', $returnProperties );


if ($result)
{
  printf("Contact found in CRM\n");
  $contact =& $client->get_contact( $key, $result, $returnProperties );
  print_r($contact);
}
else
{
  print("Not found - adding.\n");

  // $result =& $client->get_contact( $key, array('contact_id' => 102, 'test' => 103), $returnProperties );
  $result =& $client->add_contact( $key, 'Dave', 'Neary', 'dneary@gnome.org', $returnProperties );
  print_r($result);
}
?>
