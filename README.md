vagrant-stuff
=============
to test: install vagrant and virtualbox, clone and:<br>
 cd vagrant-stuff<br>
 vagrant box add base http://files.vagrantup.com/precise64.box<br>
 vagrant up<br>
 wait<br>
 localhost:7070/OBPS<br>
<br>
should <br>
<br>
future?: localhost:7070/OBPS/conf.html<br>
place an up to date-warfile in the obps-gitrepo<br>
so there's no need to compile on creation of a vm<br>
<br>
<br>
td:<br>
 port forwardingthing oO, hm, der jetty service isch wohls prob, jetty:run geht oOoO<br>
 accountdb<br>
 moar options for mkmongodb.js<br>
 service { “jetty”: enable => true, ensure => running }<br>
  servicewatchdirbla<br>
